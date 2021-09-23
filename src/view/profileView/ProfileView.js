import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'
import './ProfileView.css'
import PokemonAPIService from '../../shared/api/service/PokemonAPIService'

export const ProfileView = () => {
    const [serverResponse, setServerResponse] = useState();
    const [chosenPokemon, setChosenPokemon] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchData();
    }, [chosenPokemon]);
    
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

    const displayData = () => {

        return (
            <div>
                <h2>Name: {serverResponse?.name}</h2>
            </div>
        )
    }

    return (
        <div className="profile">
            <header className="top">
                <input placeholder="Search for a pokemon avatar!" onChange={(event) => setChosenPokemon(event.target.value)} />
            </header>

            <main className="bottom">
                <img src={serverResponse?.sprites?.front_default} alt="A sprite of a pokemon." />
                <h2>Weight: {serverResponse?.weight}</h2>
                <h3>Height: {serverResponse?.height}</h3>
                <p className="p1">Name: {serverResponse?.name}</p>
    
                <section className="buttons">
                <button className="profileButton" onClick={() => fetchData()}>Get Avatar</button>
                </section>
            </main>
        </div>
    );
}
