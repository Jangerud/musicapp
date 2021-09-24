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
import { PokemonView } from "../view/pokemonView/PokemonView"


export const Routes = ({children}) => {
const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

const isUserAuthenticated = () => {
    const userFromMemory = localStorage.getItem(LocalStorage.username)
    setAuthenticatedUser(userFromMemory);
};

useEffect(() => {
    isUserAuthenticated();
}, []);

const blockIfAuthenticated = (view) => {
    if (authenticatedUser) return HomeView;
    else return view;
}

const authenticationRequired = (view) => {
    if (authenticatedUser) return view;
    else return LoginView;
}

    return (
        <BrowserRouter basename="/musicapp">
        {children}
            <Switch>
                <Route exact path={RoutingPath.loginView} component={blockIfAuthenticated(LoginView)} />
                <Route exact path={RoutingPath.signUpView} component={SignUpView} /> 
                <Route exact path={RoutingPath.usersView} component={authenticationRequired(UsersView)} /> 
                <Route exact path={RoutingPath.profileView} component={authenticationRequired(ProfileView)} />
                <Route exact path={RoutingPath.pokemonView} component={authenticationRequired(PokemonView)} />
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}
