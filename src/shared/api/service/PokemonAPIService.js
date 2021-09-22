import axios from 'axios'
import http from '../PokemonAPI'

const searchPokemon = () => {
    
return http.get("/pokemon/onix");
};

export default { searchPokemon };