import React from 'react'
import { Welcome } from '../../components/WelcomeMessage/Welcome'
import './LoginView.css'
import {Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'

export const LoginView = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    
    const login = () => {
        setAuthenticatedUser(username);
        localStorage.setItem("username", username);
    };

    return (
        <div className="login">
             <header className="top">
                    <Welcome />
                </header>

                <main className="bottom">
                    
                    <p className="p1">Username: {username}</p> 
                    <input className="usernameInput" placeholder="Enter username" onChange={(event) => setUsername(event.target.value)}></input>
                    <p className="p2">Password:</p> 
                    <input className="passwordInput" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}></input>
                    
                   

                    <section className="buttons">
                    <Link to={RoutingPath.homeView} className="loginButton" onClick={() => login()}>Login</Link>
                    </section>

                    

                </main>
        </div>
    )
}
