import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";

const AppRouter = ({ }) => {
    const { isAuthenticated } = useAuth0();
    return (
        <Router>
            <PrivateRoute path="/about">
                <p>poopfarts</p>
            </PrivateRoute>
            <PrivateRoute path="/users">
                <p>mmm so tasty yummy farts in my mouth</p>
            </PrivateRoute>
            <Route exact path="/" component={isAuthenticated ? Dashboard : Home} />
        </Router >
    );
}

export default AppRouter