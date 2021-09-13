import {BrowserRouter, Switch, Route} from "react-router-dom"
import { HomeView } from "../view/homeView/HomeView"
import {LoginView} from "../view/loginView/LoginView"
import {SignUpView} from "../view/signupView/SignUpView"
import RoutingPath from './RoutingPath'
import { useContext } from "react"


export const Routes = ({children}) => {
// const [authenticatedUser, setAuthenticatedUser] = useContext()

// const isUserAuthenticated = () => {
//     const userFromMemory = localStorage.getItem("username")
//     setAuthenticatedUser(userFromMemory);

// }

    return (
        <BrowserRouter>
        {children}
            <Switch>
                <Route exact path={RoutingPath.loginView} component={LoginView} />
                <Route exact path={RoutingPath.signUpView} component={SignUpView} />
                <Route exact path={RoutingPath.homeView} component={HomeView} /> 
            </Switch>
        </BrowserRouter>
    )
}
