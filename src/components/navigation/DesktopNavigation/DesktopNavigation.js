import React from 'react'
import { Link } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
    return (
        <div className="deskDiv">
            <section className="navbar">
            <Link to={RoutingPath.homeView}>Home</Link>
            <Link to ={RoutingPath.loginView}>Login</Link>
            <Link to={RoutingPath.signUpView}>Sign Up</Link>
            </section>
        </div>
    )
}
