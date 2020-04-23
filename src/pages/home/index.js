/*
 * @Descripttion: 
 * @Author: lsg
 * @Date: 2020-04-14 16:00:25
 * @LastEditors: lsg
 * @LastEditTime: 2020-04-22 17:03:40
 * @FilePath: \react-app-demo\src\pages\home\index.js
 */
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Layout, Menu, Breadcrumb } from 'antd'

import './home.scss';
const { Header, Content, Footer } = Layout;

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  } else {
    return null
  }
}

const AsyncMain = Loadable({
  loader: () => import('./main/'),
  loading: MyLoadingComponent,
})
const AsyncList = Loadable({
  loader: () => import('./list/'),
  loading: MyLoadingComponent,
})

const routes = [
  { path: '/home/main', component: AsyncMain, exact: true },
  { path: '/home/list', component: AsyncList },
  // { path: '/welcome', component: AsyncWelcome },
]

class home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match)
  }
  
  render() {
    return (
      <Layout className='home-content'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Link to='/home/main'>main</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/home/list'>list</Link>
            </Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
            {/* <BrowserRouter> */}
              <div
                className='router-page'
                style={{ height: '100%', width: '100%' }}
              >
                <Switch>
                  {routes.map(route => (
                    <Route
                      key={route.path}
                      path={route.path}
                      component={route.component}
                      exact={route.exact}
                    ></Route>
                  ))}
                  <Route component={Error} />
                </Switch>
              </div>
            {/* </BrowserRouter> */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    )
  }
}
export default home;