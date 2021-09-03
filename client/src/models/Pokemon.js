var m = require("mithril")

var Pokemon = {
    
    id: -1,
    name: "",
    class: "",
    height: "",
    weight: "",
    type1: "",
    type2: "",
    flavorText: "",

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
    evoChain: [],
    evoLevels: [],

    loadList: function() {

        return m.request({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon-species?limit=899"  
        })
        .then(function(result) { 
            Pokemon.list = result.results 
        }).then(function() {

            //ensures gen arrays are empty before populating them.
            Pokemon.gen1 = []
            Pokemon.gen2 = []
            Pokemon.gen3 = []
            Pokemon.gen4 = []
            Pokemon.gen5 = []
            Pokemon.gen6 = []
            Pokemon.gen7 = []
            Pokemon.gen8 = []

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

        return m.request({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/" + id
        })
        .then(function(result) { 
            Pokemon.setId(result.id)
            Pokemon.setName(Pokemon.nameCaps(result.name))           
            Pokemon.setHeight(result.height)
            Pokemon.setWeight(result.weight)
            Pokemon.setType1(Pokemon.nameCaps(result.types[0].type.name))

            if (result.types[1]){
                Pokemon.setType2(Pokemon.nameCaps(result.types[1].type.name))
            } else (Pokemon.setType2("None"))
        })
        .then(m.request({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon-species/" + id
        })
        .then(function(result) {
            let evoURL = result.evolution_chain.url
            Pokemon.setClass(result.genera[7].genus)

            let n = 0
            for (str of result.flavor_text_entries) {
                if (str.language.name == "en") {n++}
            }

            let i = 0
            let j = 0
            for (str of result.flavor_text_entries) {
                if (str.language.name == "en" && j < 1 && i <= n) {
                    Pokemon.setFlavorText(str.flavor_text)
                    j++
                }
                i++
            }

            return evoURL
        })
        .then(function(evoURL) {

            console.log(evoURL)
            return m.request({
                method: "GET",
                url: evoURL
            })
            .then(function(result) {

                Pokemon.evoChain = []
                Pokemon.evoLevels = []
                Pokemon.evoChain.push(result.chain.species.url.split("/")[6])

                if (result.chain.evolves_to[0]) {
        
                    // console.log(result.chain)
                    Pokemon.evoChain.push(result.chain.evolves_to[0].species.url.split("/")[6])

                    if(result.chain.evolves_to[0].evolution_details[0].trigger.name == "level-up") {

                        if(result.chain.evolves_to[0].evolution_details[0].min_level){
                            Pokemon.evoLevels.push(result.chain.evolves_to[0].evolution_details[0].min_level)
                        } else if (result.chain.evolves_to[0].evolution_details[0].min_happiness) {
                            Pokemon.evoLevels.push(
                                "Happiness: " + result.chain.evolves_to[0].evolution_details[0].min_happiness
                            )
                        }                        
                    } else if (result.chain.evolves_to[0].evolution_details[0].trigger.name == "use-item") {
                        Pokemon.evoLevels.push(
                            Pokemon.nameCaps(result.chain.evolves_to[0].evolution_details[0].item.name)
                        )
                    } else if (result.chain.evolves_to[0].evolution_details[0].trigger.name == "trade") {

                        if (result.chain.evolves_to[0].evolution_details[0].held_item) {
                            Pokemon.evoLevels.push(
                                "Trade while holding " + 
                                Pokemon.nameCaps(result.chain.evolves_to[0].evolution_details[0].held_item.name)
                            )
                        } else {
                            Pokemon.evoLevels.push("Trade")
                        }
                    }

                    if (result.chain.evolves_to[0].evolves_to[0]){

                        Pokemon.evoChain.push(result.chain.evolves_to[0].evolves_to[0].species.url.split("/")[6])

                        if(result.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name == "level-up") {

                            if(result.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level){
                                Pokemon.evoLevels.push(result.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level)
                            } else if (result.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_happiness) {
                                Pokemon.evoLevels.push(
                                    "Happiness: " + result.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_happiness
                                )
                            }                            
                        } else if (result.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name == "use-item") {
                            Pokemon.evoLevels.push(
                                Pokemon.nameCaps(result.chain.evolves_to[0].evolves_to[0].evolution_details[0].item.name)
                            )
                        } else if (result.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name == "trade") {

                            if (result.chain.evolves_to[0].evolves_to[0].evolution_details[0].held_item) {
                                Pokemon.evoLevels.push(
                                    "Trade while holding " + 
                                    Pokemon.nameCaps(result.chain.evolves_to[0].evolves_to[0].evolution_details[0].held_item.name)
                                )
                            } else {
                                Pokemon.evoLevels.push("Trade")
                            }
                        }
                    }
                }
            })
        })
        )
    },

    nameCaps: function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    },
    
    addZeroes: function(id) {
        if (id < 10) { return "00" + id } 
        else if (id < 100) { return "0" + id }
        else { return id }
    },

    getId: function() {return this.id},
    setId: function(id) {this.id = id},

    getName: function() { return this.name},
    setName: function(name) {this.name = name},

    getClass: function() { return this.class},
    setClass: function(str) {this.class = str},

    getHeight: function() { return this.height},
    setHeight: function(height) {
        //convert decimeters to feet
        this.height = (height / 3.048).toFixed(1)
    },

    getWeight: function() { return this.weight},
    setWeight: function(weight) {
        //convert hectograms to lbs
        this.weight = (weight / 4.53).toFixed(1)
    },

    getType1: function() { return this.type1},
    setType1: function(type1) {this.type1 = type1},

    getType2: function() { return this.type2},
    setType2: function(type2) {this.type2 = type2}, 
    
    getFlavorText: function() { return this.flavorText},
    setFlavorText: function(str) {this.flavorText = str}
}

module.exports = Pokemon