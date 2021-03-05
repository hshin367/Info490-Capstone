import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Bg, Container, TextBox } from "./styles/style.js";
import { LogoText } from "../components/Logo/style.js";
import "./Login.css";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem("user-info")) {
      history.push("/")
    }
  })
  async function login(){
    console.warn(email, password)
    let item ={email,password};
    let result = await fetch("https://us-central1-restore-uw.cloudfunctions.net/api/login", {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(item)
    })
    .catch((error) => {
        console.log(error)
    });

    result = await result.json();
    console.log(result)
    localStorage.setItem("user-info", JSON.stringify(result))
    history.push("/")
  }

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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
            </Form.Item>

            {/* <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
          </Form.Item>

          <div>
            <Button
              htmlType="submit"
              className="login-form-button"
              id="form-btn"
              onClick={login}
            >
              LOGIN
            </Button>
            <TextBox alignCenter color="white">
              OR
            </TextBox>
            <Button htmlType="button" id="form-btn">
              CREATE ACCOUNT
            </Button>
          </div>
        </Form>
      </Container>
    </Bg>
  );
};

export default Login;
