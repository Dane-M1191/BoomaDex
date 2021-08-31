var m = require("mithril")

module.exports = {

    //displays nav links and Dex aesthetic
    view: function(vnode) {
        return m(".dex-border", 
            m(".dex-inset",
                m(".nav-head", m(".header", "BoomaDex"),
                    m("nav", [
                        m(m.route.Link, {href: "/list", class: "nav-link"}, "Home"),
                        m(m.route.Link, {href: "/list/gen/1", class: "nav-link"}, "Gen 1"),
                        m(m.route.Link, {href: "/list/gen/2", class: "nav-link"}, "Gen 2"),
                        m(m.route.Link, {href: "/list/gen/3", class: "nav-link"}, "Gen 3"),
                        m(m.route.Link, {href: "/list/gen/4", class: "nav-link"}, "Gen 4"),
                        m(m.route.Link, {href: "/list/gen/5", class: "nav-link"}, "Gen 5"),
                        m(m.route.Link, {href: "/list/gen/6", class: "nav-link"}, "Gen 6"),
                        m(m.route.Link, {href: "/list/gen/7", class: "nav-link"}, "Gen 7"),
                        m(m.route.Link, {href: "/list/gen/8", class: "nav-link"}, "Gen 8")                                         
                    ]),
                    m(".dex-screen", m(".screen-content", vnode.children))
                )
            )
        )
    }
}