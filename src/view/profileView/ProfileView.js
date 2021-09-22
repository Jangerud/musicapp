import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'
import './ProfileView.css'

export const ProfileView = () => {
    const [serverResponse, setServerResponse] = useState();

    const fetchData = async () => {
        const API_URL = "https://pokeapi.co/api/v2/pokemon/1";
        try {
            const response = await axios.get(API_URL);
            setServerResponse(response);
        }
        catch (error) {
            alert("Error recieving data from server: " + error);
        }
    };

    return (
        <div className="profile">
            <header className="top">
                <Welcome />
            </header>

            <main className="bottom">
        
                <p className="p1">{serverResponse?.data?.name}</p> 
    
                <section className="buttons">
                <button className="profileButton" onClick={() => fetchData()}>Get Avatar</button>
                </section>
            </main>
        </div>
    );
}
