<template>
    <main id="results">
        <template v-if="pokemons !== undefined">
            <div class="pagination">
                <h5>Encontrados: {{ pokemons.length }}</h5>
            </div>
            <PokeCards :pokemons="pokemons" :loading="loading" />
        </template>
        <div v-else class="error-api">
            <h3>Error del cliente (403):</h3>
            <p>
                Por favor recarga la pagina e intetalo nuevamente.
                <br>
                Si aun sigue sin funcionar intentalo desde otra red de Wi-Fi o Datos.
            </p>
            <p>Perdon por los inconvenientes (ಡ‸ಡ)</p>
        </div>
    </main>

</template>

<script>
import PokeCards from "@/components/PokeCards.vue"


export default {
    name: 'poke-results',
    components: {
        PokeCards
    },
    props: {
        pokemons: Array,
        loading: Boolean
    },
    methods: {
        fetchPokemons() {
            this.$emit("fetch-pokemons", true);
        }
    },
    beforeMount() {
        this.fetchPokemons()
    }
}
</script>


<style>
main {
    padding: 2em 1em;
    background-color: var(--second-color);
    min-height: 80vh;

}

.pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.error-api {
    color: var(--main-color);
    text-align: center;
}

.error-api p {
    font-size: .8em;

}
</style>
