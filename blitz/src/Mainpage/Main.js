import { Outlet, Link } from "react-router-dom";
import CodingQuestions from './CodingQuestions';
import MediaPage from './MediaPage'
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import User from '../UserDisplay/index'
import LeaderBoard from '../UserDisplay/LeaderBoard/index'
const { Header, Content, Footer } = Layout;
// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));
// const items= new Array(2).fill(null).map(()=>({
//     label:`nav`,
//     Link:"/MediaPage"
// }));
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          // items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item><Link to="/MediaPage">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/User">User</Link></Breadcrumb.Item>
          <Breadcrumb><Link to="/LeaderBoard">LeaderBoard</Link></Breadcrumb>
          
        </Breadcrumb>
        <Outlet />
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <CodingQuestions />
        </div>
      </Content>
    </Layout>
  );
};
export default App;