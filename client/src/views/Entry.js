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
                    // m(".entry-col-img2", m("img", {src: "https://i.imgur.com/qETfuqv.png", alt: "bulba"})), 
                    m(".entry-col-img2", m("img", { src: "https://i.imgur.com/stUQeV2.jpg", width: '240', height: '150' })),
                    m(".entry-col-img2", m("img", { src: "https://i.imgur.com/eMU0kjC.jpg", width: '240', height: '150' }))
                )
            )
                
            
        )
    }
}