import { useAuth0 } from '@auth0/auth0-react';
import {
    Route,
    Redirect,
} from 'react-router-dom';

function PrivateRoute({ component, path }: any) {
    const { isAuthenticated } = useAuth0();
    return (
        <Route exact path={path} component={isAuthenticated ? component : (
            <Redirect to={{
                pathname: "/",
                state: { from: '' }
            }}
            />
        )} />
    );
}

export default PrivateRoute;