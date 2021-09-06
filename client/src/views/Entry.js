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

        //check if pokemon can mega-evolve or gigantimax
        var giga = false
        var mega = false
        if (Pokemon.canGmax == "Yes") {giga = true}
        if (Pokemon.canMega == "Yes") {mega = true}

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
                            Pokemon.getFemaleChance() != -12.5 ? [
                                m(".entry-col", 
                                    m(".entry-data", "Male Chance: " + Pokemon.getMaleChance() + "%")
                                ), 
                                m(".entry-col", 
                                    m(".entry-data", "Female Chance: " + Pokemon.getFemaleChance() + "%")
                                )
                            ] : [
                                m(".entry-col", 
                                    m(".entry-data", "Genderless")
                                )
                            ]
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", "Egg Steps: " + Pokemon.getEggSteps())
                            )                            
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", "Can Gigantimax: " + Pokemon.getCanGmax())
                            )                            
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", "Can Mega-Evolve: " + Pokemon.getCanMega())
                            )                            
                        )
                    ),
                    
                    //Pokemon Image--------------------------------------------------------------------------------
                    m(".entry-col-img3", 
                        m(".entry-row", 
                            m(".entry-col-img2", 
                                m("img.entry-img"
                                    , {src: "https://www.serebii.net/swordshield/pokemon/" 
                                        + Pokemon.addZeroes(Pokemon.getId()) + ".png" 
                                    } 
                                )
                            ),
                            m(".entry-col-img2", 
                                m("img.entry-img"
                                    , {src: "https://www.serebii.net/Shiny/SWSH/" 
                                        + Pokemon.addZeroes(Pokemon.getId()) + ".png" 
                                    }
                                )
                            )                        
                        ),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".label2", "Normal")
                            ),
                            m(".entry-col", 
                                m(".label2", "Shiny")
                            )
                        )
                    )
                ),
                //Flavor Text-------------------------------------------------------------------------------------
                m(".entry-row",
                    m(".entry-col2",
                        m(".label", "Flavor Text"),
                        m(".entry-row", 
                            m(".entry-col", 
                                m(".entry-data", Pokemon.getFlavorText() + Pokemon.getFlavorText() + Pokemon.getFlavorText())
                            )                            
                        )
                    )
                ),
                //Evolution Chain--------------------------------------------------------------------------------
                m(".evo-row",
                    m(".evo-data",
                        m(".entry-col-img", 
                            m(".label", "Evolution"),
                            m(".evo-row", img ? [
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
                ), 
                //Gigantix img----------------------------------------------------------------------------------------------
                giga ? [
                    m(".evo-row",
                        m(".evo-data", 
                            Pokemon.getId() != 890 ? [
                                m(".label", "Gigantimax"),
                                m(".entry-row", 
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/swordshield/pokemon/" 
                                                + Pokemon.addZeroes(Pokemon.getId()) + "-gi.png" 
                                            } 
                                        )
                                    ),
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/Shiny/SWSH/" 
                                                + Pokemon.addZeroes(Pokemon.getId()) + "-gi.png" 
                                            }
                                        )
                                    )                        
                                ),
                                m(".entry-row", 
                                    m(".entry-col", 
                                        m(".label2", "Normal")
                                    ),
                                    m(".entry-col", 
                                        m(".label2", "Shiny")
                                    )
                                ) 
                            ] : [
                                m(".label", "Eternamax"),
                                m(".entry-row", 
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/swordshield/pokemon/890-e.png" 
                                            } 
                                        )
                                    ),
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/Shiny/SWSH/890-e.png" 
                                            }
                                        )
                                    )                        
                                ),
                                m(".entry-row", 
                                    m(".entry-col", 
                                        m(".label2", "Normal")
                                    ),
                                    m(".entry-col", 
                                        m(".label2", "Shiny")
                                    )
                                ) 

                            ]
                        )
                    )
                ]:[],
                //Mega Evolution img----------------------------------------------------------------------------------------------
                mega ? [
                    Pokemon.getHas2Megas() ? [
                        m(".evo-row",
                            m(".evo-data", 
                                m(".label", "Mega-Evolution X"),
                                m(".entry-row", 
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/sunmoon/pokemon/" 
                                                + Pokemon.addZeroes(Pokemon.getId()) + "-mx.png" 
                                            } 
                                        )
                                    ),
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/Shiny/XY/" 
                                                + Pokemon.addZeroes(Pokemon.getId()) + "-mx.png" 
                                            }
                                        )
                                    )                        
                                ),
                                m(".entry-row", 
                                    m(".entry-col", 
                                        m(".label2", "Normal")
                                    ),
                                    m(".entry-col", 
                                        m(".label2", "Shiny")
                                    )
                                )
                            )
                        ),
                        m(".evo-row",
                            m(".evo-data", 
                                m(".label", "Mega-Evolution Y"),
                                m(".entry-row", 
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/sunmoon/pokemon/" 
                                                + Pokemon.addZeroes(Pokemon.getId()) + "-my.png" 
                                            } 
                                        )
                                    ),
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/Shiny/XY/" 
                                                + Pokemon.addZeroes(Pokemon.getId()) + "-my.png" 
                                            }
                                        )
                                    )                        
                                ),
                                m(".entry-row", 
                                    m(".entry-col", 
                                        m(".label2", "Normal")
                                    ),
                                    m(".entry-col", 
                                        m(".label2", "Shiny")
                                    )
                                )
                            )
                        )
                    ] : [
                        m(".evo-row",
                            m(".evo-data", 
                                m(".label", "Mega-Evolution"),
                                m(".entry-row", 
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/sunmoon/pokemon/" 
                                                + Pokemon.addZeroes(Pokemon.getId()) + "-m.png" 
                                            } 
                                        )
                                    ),
                                    m(".entry-col-img", 
                                        m("img.entry-img2", 
                                            {
                                                src: "https://www.serebii.net/Shiny/XY/" 
                                                + Pokemon.addZeroes(Pokemon.getId()) + "-m.png" 
                                            }
                                        )
                                    )                        
                                ),
                                m(".entry-row", 
                                    m(".entry-col", 
                                        m(".label2", "Normal")
                                    ),
                                    m(".entry-col", 
                                        m(".label2", "Shiny")
                                    )
                                )
                            )
                        )
                    ]
                ]:[] 
            )
        )
    }
}