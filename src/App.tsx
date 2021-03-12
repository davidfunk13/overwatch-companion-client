import { FC, Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { Button, Drawer, Layout, Menu, Space } from 'antd';
import CarouselScroller from './components/ui/CarouselScroller/CarouselScroller';
import { useAuth0 } from '@auth0/auth0-react'
import { MenuOutlined } from '@ant-design/icons'
const { Header, Footer, Sider, Content } = Layout;

const App: FC = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  return (
    <Layout>
      <Header className={"header"}>
        <MenuOutlined className="menu-icon" color="white" />
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
        {/* <CarouselScroller /> */}
        {isAuthenticated ? <Profile /> : null}
      </Content>
    </Layout >
  );
}

export default App;