var m = require("mithril")
var Pokemon = require("../models/Pokemon")

module.exports = { 

    oninit: Pokemon.loadList,
    view: function() {

        Pokemon.populateColumns(Pokemon.list)

        return m(".center",
            m(".row",
                m(".column",
                    m("", Pokemon.colOne.map(function(mon) {
                        return m("p.column-data", m(m.route.Link, 
                            {href: "/entry/" + mon.url.split("/")[6]}, 
                            "#" + mon.url.split("/")[6] + " " + Pokemon.nameCaps(mon.name))
                        )
                    }))
                ),
                m(".column",
                    m("", Pokemon.colTwo.map(function(mon) {
                        return m("p.column-data", m(m.route.Link, 
                            {href: "/entry/" + mon.url.split("/")[6]}, 
                            "#" + mon.url.split("/")[6] + " " + Pokemon.nameCaps(mon.name))
                        )
                    }))
                ),
                m(".column",
                    m("", Pokemon.colThree.map(function(mon) {
                        return m("p.column-data", m(m.route.Link, 
                            {href: "/entry/" + mon.url.split("/")[6]}, 
                            "#" + mon.url.split("/")[6] + " " + Pokemon.nameCaps(mon.name))
                        )
                    }))
                )                    
            )
        )        
    }
}