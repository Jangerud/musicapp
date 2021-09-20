import {BrowserRouter, Switch, Route} from "react-router-dom"
import { HomeView } from "../view/homeView/HomeView"
import {LoginView} from "../view/loginView/LoginView"
import {SignUpView} from "../view/signupView/SignUpView"
import RoutingPath from './RoutingPath'
import { useContext, useEffect } from "react"
import { UserContext } from "../shared/provider/UserProvider"
import LocalStorage from "../shared/storage/LocalStorage"
import { UsersView } from "../view/usersView/UsersView"
import { ProfileView } from "../view/profileView/ProfileView"


export const Routes = ({children}) => {
const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

const isUserAuthenticated = () => {
    const userFromMemory = localStorage.getItem(LocalStorage.username)
    setAuthenticatedUser(userFromMemory);
};

useEffect(() => {
    isUserAuthenticated();
}, []);

    return (
        <BrowserRouter basename="/musicapp">
        {children}
            <Switch>
                <Route exact path={RoutingPath.loginView} component={LoginView} />
                <Route exact path={RoutingPath.signUpView} component={SignUpView} />
                <Route exact path={RoutingPath.homeView} component={HomeView} /> 
                <Route exact path={RoutingPath.usersView} component={UsersView} /> 
                <Route exact path={RoutingPath.profileView} component={ProfileView} />
            </Switch>
        </BrowserRouter>
    )
}
