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
            Pokemon.list = result.results            
        }).then(function() {

            // console.log(Pokemon.list[333].url.split("/")[6])


            let i = 0;

            for (pokemon of Pokemon.list) {


                if (Pokemon.list[i].url.split("/")[6] <= 151) {
                    Pokemon.gen1.push(Pokemon.list[i])
                } else if (Pokemon.list[i].url.split("/")[6] > 151 && Pokemon.list[i].url.split("/")[6] <= 251) {
                    Pokemon.gen2.push(Pokemon.list[i])
                } else if (Pokemon.list[i].url.split("/")[6] > 251 && Pokemon.list[i].url.split("/")[6] <= 386) {
                    Pokemon.gen3.push(Pokemon.list[i])
                } else if (Pokemon.list[i].url.split("/")[6] > 386 && Pokemon.list[i].url.split("/")[6] <= 493) {
                    Pokemon.gen4.push(Pokemon.list[i])
                } else if (Pokemon.list[i].url.split("/")[6] > 493 && Pokemon.list[i].url.split("/")[6] <= 649) {
                    Pokemon.gen5.push(Pokemon.list[i])
                } else if (Pokemon.list[i].url.split("/")[6] > 649 && Pokemon.list[i].url.split("/")[6] <= 721) {
                    Pokemon.gen6.push(Pokemon.list[i])
                } else if (Pokemon.list[i].url.split("/")[6] > 721 && Pokemon.list[i].url.split("/")[6] <= 809) {
                    Pokemon.gen7.push(Pokemon.list[i])
                } else {
                    Pokemon.gen8.push(Pokemon.list[i])
                }

                i++



            }
            console.log(Pokemon.gen8[0])
            console.log(Pokemon.gen8[50])
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