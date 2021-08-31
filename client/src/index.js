var m = require("mithril")
var Layout = require("./views/Layout")
var PokemonList = require("./views/PokemonList")
var Entry = require("./views/Entry")

// m.mount(document.body, PokemonList);


m.route(document.body, "/list", {
    "/list" : {
        render: function() {
            return m(Layout, m(PokemonList))
        }
    }, 
    "/entry/:id" : {
        render: function() {
            return m(Entry)
        }
    }
})