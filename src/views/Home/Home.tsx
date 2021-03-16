import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
// import IHomeProps from './Home.Types';
import { useHistory } from 'react-router-dom'
const Home = ({ }: any) => {
    const { isAuthenticated } = useAuth0();
    const history = useHistory();

    useEffect(() => {
        return isAuthenticated ?
            history.push(window.location.origin + "/dashboard")
            : undefined;
    }, [])

    return (
        <div>
            <p>Home page</p>
        </div>
    );
};

export default Home;