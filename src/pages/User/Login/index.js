import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd';
import axios from 'axios';
import Axios from '../../../utils/axios';
import logo from './../../../assets/logo-white.svg';
import './../index.scss';
import './index.scss';

// const FormItem = Form.Item;

// export default class Login extends React.Component {
class Login extends React.Component {
    state = {
        iconLoading: false
    }
    // 送出表單
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        console.log(userInfo);
        this.props.form.validateFields(async (err,values)=>{
            if(!err){
                try {
                    //const res = await axios.post('/login',userInfo);
                    this.setState({iconLoading: true})
                    const res = await Axios.ajax({
                        url: '/login',
                        method:'post',
                        params: userInfo
                    })
                    console.log(res);
                    if(res.items[0].login === 'success'){
                        message.success(`${userInfo.userName}恭喜你已經通過驗證，正幫您轉入系統中心`);
                        setTimeout(() => {
                            this.setState({iconLoading: false})
                            this.props.history.replace('/admin');
                        }, 500);
                    }else{
                        message.error('登錄失敗');
                        this.setState({iconLoading: false})
                        this.props.form.resetFields();
                    }
                } catch (error) {
                    message.error('伺服器錯誤');
                    this.setState({iconLoading: false})
                }
                // message.success(`${userInfo.userName}恭喜你已經通過驗證,密碼為${userInfo.userPwd}`)
            }
        })
    }

    render(){
        // antD固定的,一定要這樣寫才能驗證
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>                
                <div className='login__box'>
                    <div className='logo' key="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <Card title="登入帳戶" className='card-wrap'>
                        {/* <h1>登入</h1> */}
                        <Row>
                            <Col span='24'>
                                {/* 預設已經 layout='horizontal' */}
                                <Form>
                                    <Form.Item label="用戶名"
                                        hasFeedback
                                    >
                                        {
                                            getFieldDecorator('userName',{
                                                initialValue: '',     /*初始值*/
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '用戶名不能為空'
                                                    },
                                                    // {
                                                    //     min: 5, max: 10,
                                                    //     message: '長度不在範圍內'
                                                    // },
                                                    {
                                                        // pattern: /^\w/g,
                                                        pattern: new RegExp('^\\w+$','g'),
                                                        message: '用戶名必須為英文字母或數字'
                                                    }
                                                ]
                                            })(
                                                <Input prefix={<Icon type='user'/>} placeholder='請輸入用戶名'/>
                                            )
                                        }
                                        {/* <Input placeholder='請輸入用戶名'/> */}
                                    </Form.Item>
                                    <Form.Item 
                                        label="輸入密碼"
                                        hasFeedback
                                    >
                                        {
                                            getFieldDecorator('userPwd',{
                                                initialValue: '',  /*初始值*/
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '用戶名不能為空'
                                                    }
                                                    // {
                                                    //     min: 6,
                                                    //     message: '密碼太短'
                                                    // },
                                                    // {
                                                    //     max: 11,
                                                    //     message: '密碼太長'
                                                    // }
                                                ]
                                            })(
                                                <Input prefix={<Icon type='lock'/>} type='password' placeholder='請輸入密碼'/>
                                            )
                                        }
                                        {/* <Input placeholder='請輸入密碼'/> */}
                                    </Form.Item>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('remember',{
                                                valuePropName: 'checked',  /*一定要記得寫才會預設打勾*/
                                                initialValue: true,       /*初始值*/
                                                rules: []
                                            })(
                                                <Checkbox> 記住密碼</Checkbox>
                                            )
                                        }
                                        <a href='#' style={{float: 'right'}}>忘記密碼</a>      
                                    </Form.Item>
                                    {/* <h2>123</h2> */}
                                    <Form.Item>
                                        <Button
                                            loading={this.state.iconLoading}
                                            type='primary' 
                                            className="login-form-button" 
                                            onClick={this.handleSubmit}
                                        >登錄</Button>
                                    </Form.Item>
                                </Form>  
                            </Col>
                        </Row>                                      
                    </Card>
                </div>
            </div>            
        )
    }
}

export default Form.create()(Login);