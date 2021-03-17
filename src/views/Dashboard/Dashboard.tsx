import IDashboardProps from './Dashboard.Types';
import { Typography } from 'antd'

let renderCount = 0;

const { Title } = Typography;

const Dashboard = ({ }: IDashboardProps) => {

    renderCount += 1;
    console.log(`Dashboard renderCount: `, renderCount);

    return (
        <div>
            <Title>Dashboard</Title>
        </div>
    );
};

export default Dashboard;

