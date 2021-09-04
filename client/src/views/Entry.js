var m = require("mithril")
var Pokemon = require("../models/Pokemon")


module.exports = { 

    
    view: function() {

        //populates pokemon fields
        if(Pokemon.id != window.location.href.split("/")[5]) {
            Pokemon.setPokemon(window.location.href.split("/")[5])
        }

        //check if current entry is first or last pokemon
        var first = false
        var last =  false
        if (Pokemon.getId() == 1) { first = true}
        if (Pokemon.getId() == 898) { last = true}

        //check if pokemon has evolutions
        var img = true
        var img2 = true
        if (Pokemon.evoChain[1]) {
            img = false            
            if (Pokemon.evoChain[2]) {
                img2 = false
            }
        }


        return m(".entry-row",
            m(".entry-col", 

                //Preavious and Next Nav------------------------------------------------------------------
                m(".entry-nav-row", 
                    first ? [
                        m(".entry-nav-col", 
                            m(".next",
                                m(".entry-nav-row2",
                                    m(".entry-nav-col2",
                                        m(".previous-next-link",
                                            m(m.route.Link, {href: "/entry/" + (Pokemon.getId()+1)}, 
                                                "Next #" + (Pokemon.getId()+1)
                                            )
                                        )
                                    ),
                                    m(".entry-nav-col2",
                                        m("img.link-img",
                                            {src: "https://www.serebii.net/swordshield/pokemon/" 
                                                + Pokemon.addZeroes(Pokemon.getId()+1) + ".png" 
                                            }
                                        )
                                    )
                                )
                            )
                        )                        
                        
                    ] : [
                        last ? [
                            m(".entry-nav-col", 
                                m(".previous",  
                                    m(".entry-nav-row2",                        
                                        m(".entry-nav-col2",
                                            m("img.link-img",
                                                {src: "https://www.serebii.net/swordshield/pokemon/" 
                                                    + Pokemon.addZeroes(Pokemon.getId()-1) + ".png" 
                                                }
                                            )
                                        ),
                                        m(".entry-nav-col2",
                                            m(".previous-next-link",
                                                m(m.route.Link, {href: "/entry/" + (Pokemon.getId()-1)}, 
                                                    "Previous #" + (Pokemon.getId()-1)
                                                )
                                            )
                                        )
                                    )
                                )
                            )                      

                        ] : [
                            m(".entry-nav-col", 
                                m(".previous",  
                                    m(".entry-nav-row2",                        
                                        m(".entry-nav-col2",
                                            m("img.link-img",
                                                {src: "https://www.serebii.net/swordshield/pokemon/" 
                                                    + Pokemon.addZeroes(Pokemon.getId()-1) + ".png" 
                                                }
                                            )
                                        ),
                                        m(".entry-nav-col2",
                                            m(".previous-next-link",
                                                m(m.route.Link, {href: "/entry/" + (Pokemon.getId()-1)}, 
                                                    "Previous #" + (Pokemon.getId()-1)
                                                )
                                            )
                                        )
                                    )
                                )
                            ), 
                            m(".entry-nav-col", 
                                m(".next",
                                    m(".entry-nav-row2",
                                        m(".entry-nav-col2",
                                            m(".previous-next-link",
                                                m(m.route.Link, {href: "/entry/" + (Pokemon.getId()+1)}, 
                                                    "Next #" + (Pokemon.getId()+1)
                                                )
                                            )
                                        ),
                                        m(".entry-nav-col2",
                                            m("img.link-img",
                                                {src: "https://www.serebii.net/swordshield/pokemon/" 
                                                    + Pokemon.addZeroes(Pokemon.getId()+1) + ".png" 
                                                }
                                            )
                                        )
                                    )
                                )
                            )
                        ]
                    ]
                ),
                //Entry Data Row------------------------------------------------------------------------
                m(".entry-row",
                    m(".entry-col2",
                        m(".entry-row3", 
                            m(".entry-col", m(".entry-name", Pokemon.name + " #" + Pokemon.getId()))
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
                                m(".entry-data", "Male Chance: " + Pokemon.getMaleChance() + "%")
                            ), 
                            m(".entry-col", 
                                m(".entry-data", "Female Chance: " + Pokemon.getFemaleChance() + "%")
                            )
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", "Egg Steps: " + Pokemon.getEggSteps())
                            )                            
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", "Can Mega-Evovle: " + Pokemon.getCanMega())
                            )                            
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", "Can Gigantimax: " + Pokemon.getCanGmax())
                            )                            
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", Pokemon.getFlavorText())
                            )                            
                        )
                    ),
                    
                    //Evolution Chain--------------------------------------------------------------------------------
                    m(".entry-col-img", 
                        m(".entry-row", 
                            m(".entry-col-img2", 
                                m("img.entry-img"
                                    , {src: "https://www.serebii.net/swordshield/pokemon/" 
                                        + Pokemon.addZeroes(Pokemon.getId()) + ".png" 
                                    }
                                )
                            ),
                            m(".entry-col-img2", 
                                m("img.entry-img2"
                                    , {src: "https://www.serebii.net/Shiny/SWSH/" 
                                        + Pokemon.addZeroes(Pokemon.getId()) + ".png" 
                                    }
                                )
                            )
                        )
                    )                    
                ),
                m(".evo-row",
                    m(".evo-data",
                        m(".entry-col-img", 
                            m(".entry-row", img ? [
                                m(".evo-col-img", 
                                    m(m.route.Link, {href: "/entry/" + Pokemon.evoChain[0]},
                                        m("img.evo-img2", 
                                            {
                                                src: "https://www.serebii.net/swordshield/pokemon/" 
                                                + Pokemon.addZeroes(Pokemon.evoChain[0]) + ".png"
                                            }
                                        )
                                    )
                                )
                            ] : 
                            [ img2 ? 
                                [
                                    m(".evo-col-img", 
                                        m(m.route.Link, {href: "/entry/" + Pokemon.evoChain[0]},
                                            m("img.evo-img1", 
                                                {
                                                    src: "https://www.serebii.net/swordshield/pokemon/" 
                                                    + Pokemon.addZeroes(Pokemon.evoChain[0]) + ".png" 
                                                }
                                            )
                                        )
                                    ),                                    
                                    m(".evo-col-arrow", 
                                        m(".evo-row",                                             
                                            m("img.evo-arrow-right", {src: "https://i.imgur.com/jwr0a97.png"})
                                        ),
                                        m(".evo-row", 
                                            m(".evo-level", Pokemon.evoLevels[0])
                                        )
                                    ),                                    
                                    m(".evo-col-img", 
                                        m(m.route.Link, {href: "/entry/" + Pokemon.evoChain[1]},
                                            m("img.evo-img3", 
                                                {
                                                    src: "https://www.serebii.net/swordshield/pokemon/" 
                                                    + Pokemon.addZeroes(Pokemon.evoChain[1]) + ".png" 
                                                }
                                            )
                                        )
                                    )
                                ] : 
                                [
                                    m(".evo-col-img", 
                                        m(m.route.Link, {href: "/entry/" + Pokemon.evoChain[0]},
                                            m("img.evo-img1", 
                                                {
                                                    src: "https://www.serebii.net/swordshield/pokemon/" 
                                                    + Pokemon.addZeroes(Pokemon.evoChain[0]) + ".png" 
                                                }
                                            )
                                        )
                                    ),
                                    m(".evo-col-arrow", 
                                        m(".evo-row", 
                                            
                                            m("img.evo-arrow-right", {src: "https://i.imgur.com/jwr0a97.png"})
                                        ),
                                        m(".evo-row", 
                                            m(".evo-level", Pokemon.evoLevels[0])
                                        )
                                    ),
                                    m("", 
                                        m(m.route.Link, {href: "/entry/" + Pokemon.evoChain[1]},
                                            m("img.evo-img2", 
                                                {
                                                    src: "https://www.serebii.net/swordshield/pokemon/" 
                                                    + Pokemon.addZeroes(Pokemon.evoChain[1]) + ".png" 
                                                }
                                            )
                                        )
                                    ),
                                    m(".evo-col-arrow", 
                                        m(".evo-row", 
                                            
                                            m("img.evo-arrow-right", {src: "https://i.imgur.com/jwr0a97.png"})
                                        ),
                                        m(".evo-row", 
                                            m(".evo-level", Pokemon.evoLevels[1])
                                        )
                                    ),
                                    m(".evo-col-img", 
                                        m(m.route.Link, {href: "/entry/" + Pokemon.evoChain[2]},
                                            m("img.evo-img3", 
                                                {
                                                    src: "https://www.serebii.net/swordshield/pokemon/" 
                                                    + Pokemon.addZeroes(Pokemon.evoChain[2]) + ".png" 
                                                }
                                            )
                                        )
                                    )
                                ]   
                            ])

                        )  
                    )  
                )
            )
        )
    }
}