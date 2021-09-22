import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import '../profile/Profile.css';

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    return (
        <div className="profile">
            <img className="profile__img" src="https://thispersondoesnotexist.com/image" alt="A random generated face." />
            <span>{authenticatedUser}</span>
        </div>
    );
};
