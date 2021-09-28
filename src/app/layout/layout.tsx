import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { SignIn, SignUp, Home} from '../pages'

export function Layout(){
    return (
        <Router>
            <Switch>
                <Route path="/sign-in">
                    <SignIn />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}


