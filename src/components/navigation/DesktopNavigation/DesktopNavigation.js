import React from 'react'
import { Link } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import img from '../../../shared/images/MB-logo.png'
import '../DesktopNavigation/DesktopNavigation.css'

export const DesktopNavigation = () => {
    return (
        <div className="deskDiv">
            <nav className="deskNavbar" >
                <img src={img} className="navbar__logo" alt="Navbar logo." />
                <ul className="navbar__list--desktop">
                    <Link to={RoutingPath.homeView}>Home</Link>
                    <Link to ={RoutingPath.loginView}>Login</Link>
                    <Link to={RoutingPath.signUpView}>Sign Up</Link>
                </ul>

            </nav>
        </div>
    )
}
