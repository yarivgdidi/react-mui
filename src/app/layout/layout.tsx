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
                    <Route path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPassword />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>

    )
}


