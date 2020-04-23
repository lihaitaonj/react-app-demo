/*
 * @Descripttion: 
 * @Author: lsg
 * @Date: 2020-04-15 09:11:00
 * @LastEditors: lsg
 * @LastEditTime: 2020-04-22 16:59:17
 * @FilePath: \react-app-demo\src\pages\home\main\index.js
 */
import React, { useState } from 'react'
import { Button } from 'antd';

import './index.scss';

function Main() {
  const [count, setCount] = useState(0);
 
     return (
       <div>
         <p>You clicked {count} times</p>
         <Button onClick={() => setCount(1)}>
         Click me
       </Button>
      </div>
    );
}
export default Main