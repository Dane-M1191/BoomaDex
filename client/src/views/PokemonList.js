var m = require("mithril")
var Pokemon = require("../models/Pokemon")

module.exports = { 

    oninit: Pokemon.loadList,
    view: function() {
        // return m("", m("h1", "BoomaDex"),
        //     m("ol", Pokemon.list.map(function(mon) {
        //         return m("li", m(m.route.Link, {href: "/entry/" + mon.url.split("/")[6]}, mon.name))
        //     })
        // ))

        return m("table.center",
            m("tr",
                m("td",
                    m("ol", Pokemon.list.map(function(mon) {
                        return m("li", m(m.route.Link, {href: "/entry/" + mon.url.split("/")[6]}, mon.name))
                    }))
                ),
                m("td",
                    m("ol", Pokemon.list.map(function(mon) {
                        return m("li", m(m.route.Link, {href: "/entry/" + mon.url.split("/")[6]}, mon.name))
                    }))
                ),
                m("td",
                    m("ol", Pokemon.list.map(function(mon) {
                        return m("li", m(m.route.Link, {href: "/entry/" + mon.url.split("/")[6]}, mon.name))
                    }))
                ),
                    
            )
        )




    }
}