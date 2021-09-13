import React from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'

export const LoginView = () => {
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
                    
                    </section>

                </main>
        </div>
    )
}
