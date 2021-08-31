var m = require("mithril")
var Pokemon = require("../models/Pokemon")

module.exports = { 

    
    view: function() {
        if(Pokemon.id != window.location.href.split("/")[5]) {
            Pokemon.setPokemon(window.location.href.split("/")[5])
        }

        return m("h1", Pokemon.name)
    }
}