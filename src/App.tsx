import { FC, Fragment } from 'react';
import './App.css';
import { Layout, Menu, } from 'antd';
import { useAuth0 } from '@auth0/auth0-react'

import AppRouter from './components/Router';
import MenuButton from './components/MenuButton/MenuButton';

const { Header, Content } = Layout;

const App: FC = () => {

  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <Fragment>
      <Layout>
        <Header className={"header"}>
          <MenuButton />
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

