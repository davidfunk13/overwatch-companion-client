import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { close } from './drawerSlice'
import { isDrawerOpen } from '../../../redux/counter/counterSlice';
import IDrawerProps from './Drawer.Types';

const AppDrawer: React.FC<IDrawerProps> = ({ }) => {
    const isOpen = useSelector(isDrawerOpen);

    const dispatch = useDispatch();

    function closeDrawer() {
        return () => dispatch(close())
    }

    return (
        <Drawer
            title="App Navigation Drawer"
            placement="left"
            closable={true}
            onClose={closeDrawer}
            visible={isOpen}
        >
            <nav>
                <ul>
                    <li>
                        <Link onClick={closeDrawer} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeDrawer} to="/about">About</Link>
                    </li>
                    <li>
                        <Link onClick={closeDrawer} to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </Drawer >
    );
};

export default AppDrawer;
