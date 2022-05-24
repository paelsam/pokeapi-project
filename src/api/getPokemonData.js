const getPokemonData = async(url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const {
            id,
            name,
            types,
            sprites,
        } = await data;
        let infoPokemon = {
            id: id,
            name: name,
            types: types,
            sprite: sprites.front_default
        };
        return infoPokemon;
    } catch (error) {
        console.log(error)
    }
}

export default getPokemonData;