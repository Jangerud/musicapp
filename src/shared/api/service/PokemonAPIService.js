import axios from 'axios'
import http from '../PokemonAPI'

const searchPokemon = (pokemonName) => {
    
return http.get(`/pokemon/${pokemonName}`);
};

const getAllCharacters = () => {
    return http.get("/pokemon?limit=100");
};

export default { searchPokemon, getAllCharacters };

