import React from 'react';
import { Card } from 'antd';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: '登入帳號',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    }, 
    {
        title: '登入時間',
        dataIndex: 'loginTime',
        key: 'loginTime',
    },
    {
        title: '操作時間',
        dataIndex: 'useTime',
        key: 'useTime',
    },
    {
        title: 'IP 位置',
        dataIndex: 'ipAddress',
        key: 'ipAddress',
    }, 
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: tags => (
    //         <span>
    //         {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    //         </span>
    //     ),
    // }, 
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //         <span>
    //         <a href="javascript:;">Invite {record.name}</a>
    //         <Divider type="vertical" />
    //         <a href="javascript:;">Delete</a>
    //         </span>
    //     ),
    // }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        loginTime: '2018-10-13',
        useTime: '36mins',
        ipAddress: '192.168.1.1',
        // tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        loginTime: '2018-10-11',
        useTime: '36mins',
        ipAddress: '192.168.0.0',
        // tags: ['loser'],
    }, 
    {
        key: '3',
        name: 'Joe Black',
        loginTime: '2018-10-11',
        useTime: '36mins',
        ipAddress: '192.168.1.2',
        // tags: ['cool', 'teacher'],
    }
];

export default class LoginRecord extends React.Component{ 
    render(){
        return(
            <Card
                title="登入者記錄"
                extra={<a href="#">More</a>}
                // style={{ width: 300 }}
            >
                <Table columns={columns} dataSource={data} />
            </Card>
        )
    }
}