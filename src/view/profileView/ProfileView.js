import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'
import './ProfileView.css'
import PokemonAPIService from '../../shared/api/service/PokemonAPIService'
import { useDebounce } from '../../shared/hooks/useDebounce'

export const ProfileView = () => {
    const [serverResponse, setServerResponse] = useState();
    const [chosenPokemon, setChosenPokemon] = useState();
    const [loading, setLoading] = useState(true);
    const [serverData, setServerData] = useState();
    const debounceValue = useDebounce(chosenPokemon, 1000)


    useEffect(() => {
        fetchData();
        fetchGroupData();
    }, [debounceValue]);
    
    const fetchData = async () => {
        setLoading(true);
        try {
            const {data} = await PokemonAPIService.searchPokemon(chosenPokemon);
            setServerResponse(data);
            console.log(data);
            setLoading(false);
        }
        catch (error) {
            console.log(`Error recieving data from server: ${error}`);
        }
    };

    const fetchGroupData = async () => {
        try{
            const {data} = await PokemonAPIService.getAllCharacters();
            setServerData(data);
        }
        catch (error) {
            console.log(error);
        };
    };

    const array = ["A", "B", "C"];

    const displayData = () => {
        return serverData?.results?.map((pokemon, i) => {
            return (<div key={pokemon.name}>
                <p>
                    {i}. {pokemon.name}
                </p>
            </div>)
        })      
    };
        
    

    return (
        <div className="profileView">
            <header className="top">
                <input placeholder="Search for a pokemon avatar!" onChange={(event) => setChosenPokemon(event.target.value)} />
                <button onClick={() => console.log(serverData)}>Test API call</button>
            </header>
            
            <main className="bottom">
                <img src={serverResponse?.sprites?.front_default} alt="A sprite of a pokemon." />
                <h2>Weight: {serverResponse?.weight}</h2>
                <h3>Height: {serverResponse?.height}</h3>
                <p className="p1">Name: {serverResponse?.name}</p>

    
                <section className="buttons">
                <button className="profileButton" onClick={() => fetchData()}>Get Avatar</button>
                </section>
                {displayData()}
            </main>
        </div>
    );
}
