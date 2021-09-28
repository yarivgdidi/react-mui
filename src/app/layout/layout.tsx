import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { SignIn, SignUp, ForgotPassword, Home} from '../pages'

export function Layout(){
    return (
        <div className="main-layout">
            <Router>
                <Switch>
                    <Route exact component={SignIn} path="/sign-in"/>
                    <Route exact component={SignUp} path="/sign-up"/>
                    <Route exact component={ForgotPassword}  path="/forgot-password"/>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>

    )
}


