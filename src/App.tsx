import { FC, Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { Button, Drawer, Layout, Space } from 'antd';
import CarouselScroller from './components/ui/CarouselScroller/CarouselScroller';

const { Header, Footer, Sider, Content } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Header>
        <Space >
          <LoginButton />
          <LogoutButton />
        </Space>
      </Header>
      <Content >
        <CarouselScroller />
        <Profile />
      </Content>
    </Layout>
  );
}

export default App;