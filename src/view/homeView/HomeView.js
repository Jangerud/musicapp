import React from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'
import {LoginView} from '../loginView/LoginView'
import {SignUpView} from '../signupView/SignUpView'
import {Link} from 'react-router-dom'
import './HomeView.css'

export const HomeView = () => {

    return (
        <div className="parentDiv">
                <header className="top">
                    <Welcome />
                </header>

                <main className="bottom">
                    <section className="message">
                    <p>Find your music buddy today!</p>
                    </section>

                    <section className="buttons">
                    <Link to={"/login"} className="login">Login</Link> <Link to={"/signup"} className="signup">Sign up</Link> 
                    </section>

                </main>
        </div>
    )
}
