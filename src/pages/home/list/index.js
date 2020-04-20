/*
 * @Descripttion: 
 * @Author: lsg
 * @Date: 2020-04-15 09:11:38
 * @LastEditors: lsg
 * @LastEditTime: 2020-04-20 18:03:10
 * @FilePath: \react-app-demo\src\pages\home\list\index.js
 */
import React from 'react';
import { Card } from 'antd';

import './index.scss';

const { Meta } = Card;

function list() {
  const list_info = [1,2,3,4,5];

  return (
    <div className='list-card-content'>
      {
        list_info.map(index => 

          <Card
            key={index}
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt='example'
                src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
              />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        )
      }
    </div>
  )
}

export default list;