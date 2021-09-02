var m = require("mithril")
var Pokemon = require("../models/Pokemon")


module.exports = { 

    
    view: function() {
        if(Pokemon.id != window.location.href.split("/")[5]) {
            Pokemon.setPokemon(window.location.href.split("/")[5])
        }

        // return m("h1", Pokemon.name)
        //--------------------------------shows correct name-----------------------------------


        return m(".entry-row",
            m(".entry-col2",
                m(".entry-row3", m(".entry-col", Pokemon.name + " #" + window.location.href.split("/")[5])),
                m(".entry-row", m(".entry-col", m(".entry-data", "Type 1: " + Pokemon.type1)), m(".entry-col", m(".entry-data", "Type 2: " + Pokemon.type2))),
                m(".entry-row", m(".entry-col", m(".entry-data", "Height: " + Pokemon.height + " ft")), m(".entry-col", m(".entry-data", "Weight: " + Pokemon.weight + " lbs"))),
                // m(".entry-row"),
            ), m(".entry-col-img", 
                // m(".entry-row", 
                //     m(".entry-col", m(".entry-data", "Normal")), 
                //     m(".entry-col", m(".entry-data", "Shiny"))
                // ), 
                m(".entry-row", 
                    m(".entry-col-img2", 
                        m("img.entry-img"
                            , {src: "https://www.serebii.net/swordshield/pokemon/" 
                                + Pokemon.addZeroes(window.location.href.split("/")[5]) + ".png"
                                // , width: '240', height: '150' 
                            }
                        )
                    ),
                    m(".entry-col-img2", 
                        m("img.entry-img2"
                            , {src: "https://www.serebii.net/Shiny/SWSH/" 
                                + Pokemon.addZeroes(window.location.href.split("/")[5]) + ".png"
                                // , width: '240', height: '150' 
                            }
                        )
                    )
                )
            )
                
            
        )
    }
}