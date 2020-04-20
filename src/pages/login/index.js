/*
 * @Descripttion: 
 * @Author: lsg
 * @Date: 2020-04-14 15:59:21
 * @LastEditors: lsg
 * @LastEditTime: 2020-04-20 17:08:05
 * @FilePath: \react-app-demo\src\pages\login\index.js
 */
import React from 'react';
import { Button, Input, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import './login.scss';

// function login() {
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass_word: '',
      user_name: '',
    };
    this.btnFn = this.btnFn.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changePassWord = this.changePassWord.bind(this);
  }
  changeUserName(event) {
    let user_name = event.target.value
    this.setState({
      user_name: user_name,
    })
  }
  changePassWord(event) {
    const pass_word = event.target.value;
    this.setState({
      pass_word: pass_word
    })
  }
  btnFn() {
    message.destroy();
    console.log(this.state.user_name, this.state.pass_word)
    if(this.state.user_name === 'lihaitao' && this.state.pass_word === '123456') {
      // return <Alert message='Success Text' type='success' />
      message.success('success')
      this.props.history.push('/home/main');
    } else {
      // return <Alert style={{position: 'fixed', top: '0', left: '0'}} message='Error Text' type='error' />
      message.error('error')
    }
  }
  render() {
    return (
      <div className='login-content'>
        <div className='login-content-form'>
          <Input
            size='large'
            placeholder='userName'
            value={this.state.user_name}
            onChange={this.changeUserName}
            prefix={<UserOutlined />}
            onPressEnter={this.btnFn}
          />
          <Input.Password
            size='large'
            placeholder='passWord'
            value={this.state.pass_word}
            onChange={this.changePassWord}
            onPressEnter={this.btnFn}
          />
          <Button onClick={this.btnFn}>Login</Button>
        </div>
      </div>
    )
  }
}
export default login;