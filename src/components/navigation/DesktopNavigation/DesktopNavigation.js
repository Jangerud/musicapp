import React from 'react'
import { Link } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import img from '../../../shared/images/MB-logo.png'
import '../DesktopNavigation/DesktopNavigation.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider.js'

export const DesktopNavigation = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const renderLogin = () => {
        if (authenticatedUser) return <span>{authenticatedUser}</span>;
        return (
            <Link to ={RoutingPath.loginView}>Login</Link>
        );
           
        
    }
    

    return (
        <div className="deskDiv">
            <nav className="deskNavbar" >
                <img src={img} className="navbar__logo" alt="Navbar logo." />
                <ul className="navbar__list--desktop">
                    <Link to={RoutingPath.homeView}>Home</Link>
                    <Link to={RoutingPath.usersView}>Users</Link>
                    <Link to={RoutingPath.profileView}>Profile</Link>
                    {renderLogin()}
                </ul>

            </nav>
        </div>
    )
}
