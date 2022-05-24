const getPokemons = async(limit = 10, offset = 0) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}?offset=${offset}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


export default getPokemons;