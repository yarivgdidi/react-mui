import React from 'react';
import './App.css';
import { Layout } from "./app/layout/Layout";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {SignIn} from "./features/user/sign-in/SignIn";
import {SignUp} from "./features/user/sign-up/SignUp";
import {ForgotPassword} from "./features/user/forgot-password/ForgotPassword";
import Dashboard from "./features/dashboard/Dashboard";
import {Counter} from "./features/counter/Counter";
import {Firestore} from "./features/firestore/Firestore";

function App() {
  return (
    <div className="App">

        <Router>
            <Layout>
                <Switch>
                    <Route exact component={SignIn} path="/sign-in"/>
                    <Route exact component={SignUp} path="/sign-up"/>
                    <Route exact component={ForgotPassword} path="/forgot-password"/>
                    <Route exact component={Counter} path="/counter"/>
                    <Route exact component={Firestore} path="/firestore"/>
                    <Route exact component={Dashboard} path="/"/>
                </Switch>
            </Layout>
        </Router>

    </div>
  );
}

export default App;
