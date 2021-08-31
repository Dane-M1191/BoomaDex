var m = require("mithril")
var Layout = require("./views/Layout")
var PokemonList = require("./views/PokemonList")
var GenList = require("./views/GenList")
var Entry = require("./views/Entry")

m.route(document.body, "/list", {
    "/list" : {
        render: function() {
            return m(Layout, m(PokemonList))
        }
    }, 
    "/list/gen/:id" : {
        render: function() {
            return m(Layout, m(GenList))
        }
    },
    "/entry/:id" : {
        render: function() {
            return m(Layout, m(Entry))
        }
    }
})