import IMenuButtonProps from './MenuButton.Types';
import { MenuOutlined, LockOutlined } from '@ant-design/icons'
import { open } from '../../redux/menu/menuSlice'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

const MenuButton = ({ }: IMenuButtonProps) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const dispatch = useDispatch();

    return !isAuthenticated ? (
        <LockOutlined
            onClick={() => loginWithRedirect()}
            className="menu-icon"
            color="white"
        />
    ) : (
        <MenuOutlined
            onClick={() => dispatch(open())}
            className="menu-icon"
            color="white"
        />
    )
};

export default MenuButton;