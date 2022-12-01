import React, { useState, useEffect } from 'react';
import Mock from "mockjs";
import { Divider, List, Typography,Button } from 'antd';
import Related from './personrecrui.module.css'

export default function Personrecrui() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [userdata, setUser] = useState([])
  const data1 = [
    // { id: 1, value: '异常' },
    // { id: 2, value: '异常' },
    // { id: 3, value: '异常' },
    // { id: 4, value: '异常' },
    // { id: 5, value: '异常' },
    // { id: 6, value: '异常' },
    // { id: 7, value: '异常' },
  ];
  const addinfo = () => {
    setLoading(false);
    var Random = Mock.Random;
    var a = ['已消毒', '未消毒']
    var b = ['动物受伤', '感冒']
    var count = 10;
    for (let i = 0; i < count; i++) {
      let value1 = a[Math.floor(Math.random() * a.length)];
      data1.push(
        Mock.mock({
          id: i,
          birth: Random.datetime("yyyy-MM-dd"),  // 值是指定格式的日期字符串
          value: value1
        })
      );
    }
    setInitLoading(false)
    setList(data1)
    console.log(data1);
  }
  useEffect(() => {
    // getuserdatas()
    addinfo()
    setList(data1)
  }, [])
  return (
    <div className={Related.Relatedhe}>
      <Divider orientation="left">消毒记录</Divider>
      <List
        loading={initLoading}
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        // loadMore={loadMore}
        dataSource={list}
        renderItem={(item, index) => (
          <List.Item >
            <div className={Related.Relatedinfo}>
              <span>
                [{item.id}] {item.value}
              </span>
              <span className={Related.Relatedinfo1}>{item.birth}</span>
            </div>
          </List.Item>
        )}
      />
      <Button onClick={addinfo}>刷新数据</Button>
    </div>
  )
}
