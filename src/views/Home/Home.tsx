import { useAuth0 } from '@auth0/auth0-react';
import { Typography } from 'antd';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import IHomeProps from './Home.Types';

const { Title } = Typography;

const Home = ({ }: IHomeProps) => {
    const { isAuthenticated } = useAuth0();

    const history = useHistory();

    useEffect(() => {
        return isAuthenticated ? history.push(window.location.origin + "/dashboard") : undefined;
    }, [])

    return (
        <div>
            <Title>Home</Title>
        </div>
    );
};

export default Home;