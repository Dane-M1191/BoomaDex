var m = require("mithril")
var PokemonList = require("./views/PokemonList")
var Entry = require("./views/Entry")

// m.mount(document.body, PokemonList);


m.route(document.body, "/list", {
    "/list" : {
        render: function() {
            return m(PokemonList)
        }
    }, 
    "/entry/:id" : {
        render: function() {
            return m(Entry)
        }
    }
})