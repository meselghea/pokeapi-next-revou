
const POKEMON_API = 'https://pokeapi.co/api/v2/';

// getPokemonList -> Get the pokemon

export async function getPokemonList() {
    const response = await fetch(POKEMON_API + 'pokemon?limit=10000&offset=0');
    const data = await response.json();
    return data.results;
}

// get pokemon information 
export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + 'pokemon/' + name);
    const data = await response.json();
    return data;
}