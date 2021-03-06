import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';
import logo from './assets/logo.svg';
import './less/common.less';
// import './index.scss';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class Admin extends React.Component{

    state = {
        collapsed: false,
    };
    
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }


    render(){
        return(
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    {/* <div className="logo" /> */}
                    <div className='{styles.logo}' key="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            <h1>Ant Design Pro</h1>
                        </Link>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        )
    }
}