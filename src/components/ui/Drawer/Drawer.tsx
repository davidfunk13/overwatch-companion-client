import { Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { close } from './drawerSlice'
const AppDrawer: React.FC = () => {

    const isOpen = useSelector((state: { drawer: { open: boolean } }) => state.drawer.open);
    const dispatch = useDispatch();

    return (
        <Drawer
            title="Basic Drawer"
            placement="left"
            closable={true}
            onClose={() => dispatch(close())}
            visible={isOpen}
        >
            <nav>
                <ul>
                    <li>
                        <Link onClick={() => dispatch(close())} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => dispatch(close())} to="/about">About</Link>
                    </li>
                    <li>
                        <Link onClick={() => dispatch(close())} to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </Drawer>
    );
};

export default AppDrawer;
