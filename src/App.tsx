import { FC, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Layout, Menu, } from 'antd';
import { useAuth0 } from '@auth0/auth0-react'
import { MenuOutlined, LockOutlined } from '@ant-design/icons'
import AppRouter from './components/Router';
import { open } from './components/ui/Drawer/drawerSlice'

const { Header, Content } = Layout;

const App: FC = () => {

  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const dispatch = useDispatch();

  return (
    <Fragment>
      <Layout>
        <Header className={"header"}>
          {!isAuthenticated ? (
            <LockOutlined onClick={() => loginWithRedirect()} className="lock-icon" color="white" />
          ) : (
            <MenuOutlined onClick={() => dispatch(open())} className="menu-icon" color="white" />
          )
          }
          <h1>Overwatch Companion</h1>
          <Menu
            className={'nav'}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          >
            {isAuthenticated ?
              <Menu.Item onClick={() => logout()} key="1">Logout</Menu.Item>
              :
              <Menu.Item onClick={() => loginWithRedirect()} key="1">Login</Menu.Item>
            }
          </Menu>
        </Header>
        <Content >
          <AppRouter />
        </Content>
      </Layout >
    </Fragment>
  );
}

export default App;

