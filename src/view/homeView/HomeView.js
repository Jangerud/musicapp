import React from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'
import './HomeView.css'

export const HomeView = () => {

    return (
        <div>


            <body>

                <header className="top">
                    <Welcome />
                </header>

                <main className="bottom">
                    <h1>Hej</h1>

                </main>


            </body>

        </div>
    )
}
