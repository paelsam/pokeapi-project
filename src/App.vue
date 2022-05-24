<template>
  <Header />
  <Searcher @send-pokemon="search" />
  <PokeResults :pokemons="pokemons" :loading="loading" @fetch-pokemons="fetchPokemons">
    <PokeCards />
  </PokeResults>
</template>
 
<script>
import Header from "@/components/Header.vue";
import Searcher from "@/components/Searcher.vue";
import PokeResults from "@/components/PokeResults.vue";
import PokeCards from "@/components/PokeCards.vue";
import searchPokemon from "@/api/searchPokemon";
import fetchPokemonInformation from '@/api/fetchPokemonInformation'

export default {
  name: "App",
  components: {
    Header,
    Searcher,
    PokeResults,
    PokeCards,
  },
  data() {
    return {
      pokemons: [],
      loading: false
    }
  },
  methods: {
    search: async function (pokemon) {
      try {
        if (pokemon !== '') {
          this.pokemons = []
          this.loading = true;
          this.pokemons = await searchPokemon(pokemon);
          this.loading = false;
        } else {
          this.pokemons = []
          this.fetchPokemons();
        }
      } catch (error) {
        console.log(error)
      }
    },
    fetchPokemons: async function () {
      try {
        this.pokemons = []
        this.loading = true;
        this.pokemons = await fetchPokemonInformation();
        this.loading = false;
      } catch (error) { console.log(error) }
    }
  },
  beforeMount() {
    this.pokemons = [];
    this.fetchPokemons();
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

:root {
  --main-color: rgb(255, 255, 255, .98);
  --second-color: #52575d;
  --text-color: rgba(240, 62, 51, 255);
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

#app {
  background-color: var(--second-color);
  min-height: 100vh;
}

body {
  overflow-x: hidden;
  font-family: "Righteous", cursive;
}

img {
  max-width: 100%;
  /* Para que las paginas ocupen el 100% de su contenedor */
  height: auto;
}
</style>
