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
                m(".entry-row", Pokemon.name + " #" + window.location.href.split("/")[5]),
                m(".entry-row"),
                m(".entry-row"),
                m(".entry-row"),
            ), m(".entry-col-img", 
                m(".entry-row", 
                    m(".entry-col", "Normal"), 
                    m(".entry-col", "Shiny")
                ), 
                m(".entry-row", 
                    m(".entry-col-img2", 
                        m("img"
                            , {src: "https://www.serebii.net/swordshield/pokemon/" 
                                + Pokemon.addZeroes(window.location.href.split("/")[5]) + ".png"
                                , width: '240', height: '150' 
                            }
                        )
                    ),
                    m(".entry-col-img2", 
                        m("img"
                            , {src: "https://www.serebii.net/Shiny/SWSH/" 
                                + Pokemon.addZeroes(window.location.href.split("/")[5]) + ".png"
                                , width: '240', height: '150' 
                            }
                        )
                    )
                )
            )
                
            
        )
    }
}