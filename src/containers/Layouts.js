import React from 'react';
import Navbar from './navbar/Navbar'
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'
const { Header, Content, Footer } = Layout;


const CustomLayout = (props) =>{
    return (
        <Layout className="layout">
    
      <div className="logo" />
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
      <Navbar/>
    
    <Content>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to="/"> Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
        
      </Breadcrumb>
      
      <div style={{ background: '#fff', padding: 24}}>
          {props.children}
      </div>
    </Content>

  </Layout>

    );
};
  


export default CustomLayout;