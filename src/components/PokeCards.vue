<template>
    <template v-if="loading === false">
        <div class="card_container">
            <div class="card" v-for="pokemon, index of pokemons" :key="index" :class="pokemon.types[0].type.name">
                <img class="card-img-top" :src="pokemon.sprite" :alt="pokemon.name">
                <div class="card-body">
                    <p class="card-title">{{capitalize(pokemon.name)}}</p>
                    <h6 class="card-subtitle text-muted"># {{ pokemon.id }}</h6>
                    <div class="poke-types">
                        <div v-for="typeArray, index of typeFilter(pokemon.name, linkTypes)" :key="index">
                            <img :src="typeArray.url" :alt="typeArray.name_type"
                                :title="'Tipo: ' + typeArray.name_type">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <div v-else class="loading">
        <h3>Cargando Pokemons...</h3>
    </div>
</template>


<script>
export default {
    name: 'poke-cards',
    props: {
        pokemons: Array,
        loading: Boolean
    },
    data() {
        return {
            typesPokemon: ['bug', 'dark', 'dragon', 'electric',
                'fairy', 'fighting', 'fire',
                'flying', 'ghost', 'grass',
                'ground', 'ice', 'normal',
                'poison', 'psychic', 'rock',
                'steel', 'water'],
            linkTypes: [],
        }
    },
    methods: {
        typeFilter(pokemon, linktypes) {
            const filterArray = linktypes.filter(item => {
                return pokemon === item.name_pokemon;
            })
            return filterArray;
        },
        capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        setTypesPokemonImages(pokemon) {
            // Iteramos las imagenes relativas del pokemon
            for (const typeP of pokemon.types) {
                if (this.typesPokemon.includes(typeP.type.name)) {
                    this.linkTypes.push({
                        name_pokemon: pokemon.name,
                        name_type: typeP.type.name,
                        url: require(`@/assets/images/pokemon-types/${typeP.type.name}.png`)
                    })
                }
            }
        }
    },
    beforeUpdate() {
        // Antes de hacer otra busqueda, borramos los tipos anteriores 
        this.linkTypes = [];

        // Iteramos la lista de pokemons para definir la imagen de cada uno de sus tipos
        for (let pokemon of this.pokemons) {
            this.setTypesPokemonImages(pokemon);
        }
    }
}
</script>


<style scoped>
@import url('@/assets/css/color-types.css');

.card_container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    width: 45%;
    background-image: url(@/assets/images/poke-background.png);
    background-size: 100%;
    text-align: center;
    background-repeat: no-repeat;
    margin: .5em;
}

.card-title {
    font-size: 100%;
    text-decoration: none;
    color: var(--second-color);
}

.card-subtitle {
    font-size: 100%;
}

.card-img-top {
    background-color: rgba(255, 0, 0, 0.3);
}

.card-body {
    background-color: var(--main-color);
}

.poke-types {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.poke-types img {
    width: 28px;

}

.loading {
    text-align: center;
}
</style>
