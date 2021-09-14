import React from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'
import './LoginView.css'
import {Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const LoginView = () => {
    const [username, setUsername] = useState("Johan")
    const [password, setPassword] = useState();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    return (
        <div>
             <header className="top">
                    <Welcome />
                </header>

                <main className="bottom">
                    <section className="message">
                    <h1>Login</h1>
                    <p>Username: {username}</p> <input placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}></input> <br />
                    <p>Password:</p> <input placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}></input> <br />
                    
                    </section>

                    <section className="buttons">
                    <Link to={"/users"} className="login">Login</Link>
                    </section>

                </main>
        </div>
    )
}
