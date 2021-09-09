import React from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'
import './HomeView.css'

export const HomeView = () => {

    return (
        <div>
                <header className="top">
                    <Welcome />
                </header>

                <main className="bottom">
                    <section className="message">
                    <p>Find your music buddy today!</p>
                    </section>

                    <section className="buttons">
                    <button className="login">Login</button> <button className="signup">Sign up</button> 
                    </section>

                </main>
        </div>
    )
}
