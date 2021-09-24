import React from 'react'
import { useLocation } from 'react-router'

export const PokemonView = () => {
    const location = useLocation();
    return (
        <main>
            <section>
                <h1>{location?.state?.name}</h1>
            </section>
        </main>
    )
}
