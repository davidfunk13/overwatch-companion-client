import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../views/Home/Home";
import Dashboard from "../views/Dashboard/Dashboard";
import AppDrawer from "./Drawer/Drawer";
import Profile from "../views/Profile/Profile";

const AppRouter = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Router>
            <AppDrawer />
            <Route path="/profile" render={() => isAuthenticated ? <Profile /> : <p>Unauthorized</p>} />
            <Route path="/users" render={() => isAuthenticated ? <p>user bio page</p> : <p>Unauthorized</p>} />
            <Route exact path="/" component={isAuthenticated ? Dashboard : Home} />
        </Router >
    );
}

export default AppRouter