import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import AppDrawer from "./ui/Drawer/Drawer";

const AppRouter = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <Router>
            <AppDrawer />
            <Route path="/users" render={() => isAuthenticated ? <p>user bio page</p> : <p>Unauthorized</p>} />
            <Route path="/about" render={() => isAuthenticated ? <p>about</p> : <p>Unauthorized</p>} />
            <Route exact path="/" component={isAuthenticated ? Dashboard : Home} />
        </Router >
    );
}

export default AppRouter