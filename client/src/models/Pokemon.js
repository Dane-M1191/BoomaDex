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
    colOne: [],
    colTwo: [],
    colThree: [],

    loadList: function() {

        return m.request({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon-species?limit=899"  
        })
        .then(function(result) { 
            Pokemon.list = result.results 
        }).then(function() {

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
        })
    },

    populateColumns: function (monArray) {

        let i = 0
        Pokemon.colOne = []
        Pokemon.colTwo = []
        Pokemon.colThree = []       

        for (pokemon of monArray) {
            if (monArray[i].url.split("/")[6]  == 1 || i % 3 == 0) {
                Pokemon.colOne.push(monArray[i])
            } else if (monArray[i].url.split("/")[6]  == 2 || i % 3 == 1) {
                Pokemon.colTwo.push(monArray[i])
            } else {
                Pokemon.colThree.push(monArray[i])
            }            
            i++
        }
    },

    getGen: function(gen) {
        if (gen == 1) { return this.gen1 }
        else if (gen == 2) { return this.gen2 }
        else if (gen == 3) { return this.gen3 }
        else if (gen == 4) { return this.gen4 }
        else if (gen == 5) { return this.gen5 }
        else if (gen == 6) { return this.gen6 }
        else if (gen == 7) { return this.gen7 }
        else { return this.gen8 }
    },

    setPokemon: function (id) {
        console.log(id)

        return m.request({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon-species/" + id
        })
        .then(function(result) { 
            Pokemon.setId(result.id)
            Pokemon.setName(result.name)            
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