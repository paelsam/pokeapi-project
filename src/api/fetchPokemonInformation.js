import getPokemons from './getPokemons.js'
import getPokemonData from './getPokemonData.js'


const fetchPokemonInformation = async() => {
    try {
        const data = await getPokemons();
        const pokemons = await data.results;
        const promise = pokemons.map(async element => await getPokemonData(element.url))
        let results = await Promise.all(promise);
        return results;

    } catch (error) {
        console.log(error)
    }
}

export default fetchPokemonInformation;