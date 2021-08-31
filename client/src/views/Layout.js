var m = require("mithril")

module.exports = {

    //displays nav links and Dex aesthetic
    view: function(vnode) {
        return m(".dex-border", 
            m(".dex-inset",
                m("main.layout", m("h1", "BoomaDex"),
                    m("nav.menu", [
                        m(m.route.Link, {href: "/list"}, "Home"),
                        m(m.route.Link, {href: "/list/gen/1"}, "Gen 1"),
                        m(m.route.Link, {href: "/list/gen/2"}, "Gen 2"),
                        m(m.route.Link, {href: "/list/gen/3"}, "Gen 3"),
                        m(m.route.Link, {href: "/list/gen/4"}, "Gen 4"),
                        m(m.route.Link, {href: "/list/gen/5"}, "Gen 5"),
                        m(m.route.Link, {href: "/list/gen/6"}, "Gen 6"),
                        m(m.route.Link, {href: "/list/gen/7"}, "Gen 7"),
                        m(m.route.Link, {href: "/list/gen/8"}, "Gen 8")                                         
                    ]),
                    m(".dex-screen", m(".screen-content", vnode.children))
                )
            )
        )
    }
}