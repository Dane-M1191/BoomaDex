var m = require("mithril")

var Pokemon = {
    id: -1,
    name: "",
    list: [],
    gen1: [],
    gen2: [],
    gen3: [],
    gen4: [],
    gen5: [],
    gen6: [],
    gen7: [],
    gen8: [],

    loadList: function() {

        return m.request({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon-species?limit=899"  
        })
        .then(function(result) { 
            // Pokemon.setName(result.name)
            Pokemon.list = result.results
            // console.log(result.results.i.name)
            // console.log(Pokemon.list)
        })

    },

    setPokemon: function (id) {
        console.log(id)

        return m.request({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon-species/" + id
        })
        .then(function(result) { 
            // Pokemon.setName(result.name)
            Pokemon.setId(result.id)
            Pokemon.setName(result.name)
            
            console.log(result)
            
        })
    },

    nameCaps: function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    },

    getId: function() {return this.id},
    setId: function(id) {this.id = id},

    getName: function() { return this.name},
    setName: function(name) {this.name = name}

        

}

module.exports = Pokemon