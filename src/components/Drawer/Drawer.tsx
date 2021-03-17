import { Drawer, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { close, isMenuOpen } from '../../redux/menu/menuSlice'

import IDrawerProps from './Drawer.Types';

const AppDrawer: React.FC<IDrawerProps> = ({ }) => {
    const isOpen = useSelector(isMenuOpen);

    const dispatch = useDispatch();

    function closeDrawer() {
        return () => dispatch(close())
    }

    return (
        <Drawer
            title="Overwatch Skill Rating Tracker"
            placement="left"
            closable={true}
            onClose={closeDrawer()}
            visible={isOpen}
        >
            <nav>
                <ul>
                    <li>
                        <Link component={Typography.Link} onClick={closeDrawer()} to="/">Home</Link>
                    </li>
                    <li>
                        <Link component={Typography.Link} onClick={closeDrawer()} to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link component={Typography.Link} onClick={closeDrawer()} to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </Drawer >
    );
};

export default AppDrawer;
