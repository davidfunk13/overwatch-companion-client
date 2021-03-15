import { useEffect } from 'react'
import { Counter } from '../redux/counter/Counter';
// import IDashboardProps from './Dashboard.Types';

let renderCount = 0;

const Dashboard = ({ }: any) => {

    renderCount += 1;
    console.log(`Dashboard renderCount: `, renderCount);

    return (
        <div>
            <Counter />
            <p>Hey its a dashboard</p>
        </div>
    );
};

export default Dashboard;