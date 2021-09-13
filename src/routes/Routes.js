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
            <Switch>
                <Route exact path={'/login'} component={LoginView} />
                <Route exact path={'/signup'} component={SignUpView} />
                <Route exact path={'/'} component={HomeView} /> 
            </Switch>
        </BrowserRouter>
    )
}
