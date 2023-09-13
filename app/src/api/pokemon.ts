import axios from "axios";
import { Pokemon } from "../types/datatypes";

export const fetchPokemonList = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const result = await response.data;
    const pokemon: Pokemon[] = [];

    const promises = result.results.map(async (p: Pokemon) => {
        const response = await fetchPokemonData(p.name);
        return response;
    });

    const pokemonData = await Promise.all(promises);
    pokemon.push(...pokemonData);

    return pokemon;
}

fetchPokemonList();

export const fetchPokemonData = async (name: string) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
    const pokemon: Pokemon = response.data;
    return pokemon;
}