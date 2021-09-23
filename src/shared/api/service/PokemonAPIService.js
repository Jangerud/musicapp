import axios from 'axios'
import http from '../PokemonAPI'

const searchPokemon = (pokemonName) => {
    
return http.get(`/pokemon/${pokemonName}`);
};

export default { searchPokemon };