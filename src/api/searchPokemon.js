import getPokemons from './getPokemons.js'
import getPokemonData from './getPokemonData.js'


const searchPokemons = async(pokemon) => {
    try {
        if (pokemon === '') {
            return []
        } else {
            const data = await getPokemons(1200);
            const pokemonResults = await data.results.filter(item => {
                return item.name.startsWith(pokemon)
            });
            const promise = pokemonResults.map(async element => await getPokemonData(element.url))
            let results = await Promise.all(promise);
            return results;
        }

    } catch (error) {
        console.log(error)
    }
}


export default searchPokemons;