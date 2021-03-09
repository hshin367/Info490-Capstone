import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Bg, Container, TextBox } from "./styles/style.js";
import { LogoText } from "../components/Logo/style.js";
import "./Login.css";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Bg>
      <Container>
        <LogoText alignCenter> LOGO </LogoText>
        <LogoText alignCenter> RESTORE </LogoText>

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
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              id="login-info"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
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
              <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <div>
            <Button
              htmlType="submit"
              className="login-form-button"
              id="form-btn"
            >
              <Link to={{ pathname: "/" }}>LOGIN</Link>
            </Button>
            <TextBox alignCenter color="white">
              OR
            </TextBox>
            <Button htmlType="button" id="form-btn">
              <Link to={{ pathname: "/signup" }}> CREATE ACCOUNT</Link>
            </Button>
          </div>
        </Form>
      </Container>
    </Bg>
  );
};

export default Login;
