import React from 'react'
import axios from 'axios'
import { useState } from 'react'

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
        <main><section>
            <h1>This is the profile view</h1>
            <h2>{serverResponse?.data?.name}</h2>
            <button onClick={() => fetchData()}>Get Avatar</button>
            </section></main>
    );
}
