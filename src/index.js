/*
 * @Descripttion: 
 * @Author: lsg
 * @Date: 2020-04-14 15:33:52
 * @LastEditors: lsg
 * @LastEditTime: 2020-04-15 09:27:43
 * @FilePath: \react-app-demo\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  } else {
    return null
  }
};

const AsyncLogin = Loadable({
  loader: () => import('./pages/login/'),
  loading: MyLoadingComponent,
})
const AsyncHome = Loadable({
  loader: () => import('./pages/home/'),
  loading: MyLoadingComponent,
})

const routes = [
  { path: '/', component: AsyncHome, exact: true },
  { path: '/home', component: AsyncHome },
  { path: '/login', component: AsyncLogin },
  // { path: '/welcome', component: AsyncWelcome },
]

ReactDOM.render(
  <BrowserRouter>
    <div className='router-page' style={{ height: '100%', width: '100%' }}>
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
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
