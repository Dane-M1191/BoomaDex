var m = require("mithril")
const { gen1 } = require("../models/Pokemon")
var Pokemon = require("../models/Pokemon")

module.exports = { 

    oninit: Pokemon.loadList,
    view: function() {


        console.log(window.location.href.split("/")[6])

        if (window.location.href.split("/")[6] == 1) { Pokemon.populateColumns(Pokemon.gen1) }
        else if (window.location.href.split("/")[6] == 2) { Pokemon.populateColumns(Pokemon.gen2) }
        else if (window.location.href.split("/")[6] == 3) { Pokemon.populateColumns(Pokemon.gen3) }
        else if (window.location.href.split("/")[6] == 4) { Pokemon.populateColumns(Pokemon.gen4) }
        else if (window.location.href.split("/")[6] == 5) { Pokemon.populateColumns(Pokemon.gen5) }
        else if (window.location.href.split("/")[6] == 6) { Pokemon.populateColumns(Pokemon.gen6) }
        else if (window.location.href.split("/")[6] == 7) { Pokemon.populateColumns(Pokemon.gen7) }
        else if (window.location.href.split("/")[6] == 8) { Pokemon.populateColumns(Pokemon.gen8) }



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
                ),
                    
            )
        )

        //---------------------------------------------------------------------------------------------------------------------------------------
        // return m("table.center",
        //     m("tr",
        //         m("td",
        //             m("ol", Pokemon.getGen(window.location.href.split("/")[6]).map(function(mon) {   
        //                 return m("li", m(m.route.Link, {href: "/entry/" + mon.url.split("/")[6]}, Pokemon.nameCaps(mon.name)))
        //             }))
        //         ),
        //         m("td",
        //             m("ol", Pokemon.list.map(function(mon) {
        //                 return m("li", m(m.route.Link, {href: "/entry/" + mon.url.split("/")[6]}, Pokemon.nameCaps(mon.name)))
        //             }))
        //         ),
        //         m("td",
        //             m("ol", Pokemon.list.map(function(mon) {
        //                 return m("li", m(m.route.Link, {href: "/entry/" + mon.url.split("/")[6]}, Pokemon.nameCaps(mon.name)))
        //             }))
        //         ),
                    
        //     )
        // )
    }
}