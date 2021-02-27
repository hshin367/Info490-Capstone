import React from "react"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./Login.css";

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
        <div id="login-panel"> 
            <h1 style={{color: "white"}}> LOGO </h1>
            <h1 style={{color: "white"}}> RESTORE </h1>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
            >
                <Input 
                    id="login-info"
                    prefix={<UserOutlined
                    className="site-form-item-icon" />}
                    placeholder="Username" 
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox style={{color: "white"}}>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>

            <div>
                <Button htmlType="submit" className="login-form-button" id="form-btn">
                    LOGIN
                </Button>
                <h3 style={{color: "white"}}> OR </h3>
                <Button htmlType="button" id="form-btn">
                    CREATE ACCOUNT
                </Button>
            </div>
            </Form>
        </div>
  );
};

export default Login;