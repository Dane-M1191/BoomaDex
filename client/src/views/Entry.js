var m = require("mithril")
var Pokemon = require("../models/Pokemon")


module.exports = { 

    
    view: function() {

        if(Pokemon.id != window.location.href.split("/")[5]) {
            Pokemon.setPokemon(window.location.href.split("/")[5])
        }

        return m(".entry-row",
            m(".entry-col", 
                m(".entry-row", 
                    m(".entry-col", 
                        m(".previous",                            
                            m("img.link-img",
                                {src: "https://www.serebii.net/swordshield/pokemon/" 
                                    + Pokemon.addZeroes(window.location.href.split("/")[5] - 1) + ".png" 
                                }
                            ),
                                m(m.route.Link, {href: "/entry/" + (window.location.href.split("/")[5] - 1)}, " Previous")
                        )
                    ), 
                    m(".entry-col", 
                        m(".next",
                            m(m.route.Link, {href: "/entry/" + (parseInt(window.location.href.split("/")[5]) + 1)}, "Next "),
                            m("img.link-img",
                                {src: "https://www.serebii.net/swordshield/pokemon/" 
                                    + Pokemon.addZeroes(parseInt(window.location.href.split("/")[5]) + 1) + ".png" 
                                }
                            )
                        )
                    )
                ),
                m(".entry-row",
                    m(".entry-col2",
                        m(".entry-row3", 
                            m(".entry-col", m(".entry-name", Pokemon.name + " #" + window.location.href.split("/")[5]))
                        ),
                        m(".entry-row",
                            m(".entry-col", 
                                m(".entry-data", "Classification: " + Pokemon.getClass())
                            )
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", "Type 1: " + Pokemon.type1)
                            ), 
                            m(".entry-col", 
                                m(".entry-data", "Type 2: " + Pokemon.type2)
                            )
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", "Height: " + Pokemon.height + " ft")
                            ), 
                            m(".entry-col", 
                                m(".entry-data", "Weight: " + Pokemon.weight + " lbs")
                            )
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", Pokemon.getFlavorText())
                            )                            
                        )
                    ), 
                    m(".entry-col-img", 
                        m(".entry-row", 
                            m(".entry-col-img2", 
                                m("img.entry-img"
                                    , {src: "https://www.serebii.net/swordshield/pokemon/" 
                                        + Pokemon.addZeroes(window.location.href.split("/")[5]) + ".png" 
                                    }
                                )
                            ),
                            m(".entry-col-img2", 
                                m("img.entry-img2"
                                    , {src: "https://www.serebii.net/Shiny/SWSH/" 
                                        + Pokemon.addZeroes(window.location.href.split("/")[5]) + ".png" 
                                    }
                                )
                            )
                        )
                    )                    
                ),
                m(".evo-row",
                    m(".evo-data", "evo text evo text evo text evo text evo text evo text evo text evo text ")
                )
            )
        )
    }
}