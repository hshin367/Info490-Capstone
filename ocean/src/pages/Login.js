import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import history from "../Routes/history";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Bg, LoginContainer, TextBox } from "./styles/style.js";
import { LogoText, LogoImage } from "../components/Logo/style.js";
import "./Login.css";
import logo from "../img/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push({ pathname: "/" });
    }
  });

  function handleErrors(response) {
    if (!response.ok) throw Error(response.status);

    return response;
  }

  async function login() {
    // console.warn(email, password);
    let item = { email, password };
    await fetch("https://us-central1-restore-uw.cloudfunctions.net/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(handleErrors)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push({ pathname: "/" });
        return result;
      })
      .catch((error) => {
        alert("Oops, there has been an error : " + error);
      });
  }

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
  };

  return (
    <Bg>
      <LoginContainer>
        <LogoImage large />
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
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              id="login-info"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
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
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
            </Form.Item> */}

          {/* <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
          {/* </Form.Item> */}

          <div>
            <Button
              htmlType="submit"
              className="login-form-button"
              id="form-btn"
              onClick={login}
            >
              LOGIN
            </Button>
            <Divider>
              <TextBox alignCenter color="white">
                OR
              </TextBox>
            </Divider>
            <Button htmlType="button" id="form-btn">
              <Link to={{ pathname: "/signup" }}> CREATE ACCOUNT</Link>
            </Button>
          </div>
        </Form>
      </LoginContainer>
    </Bg>
  );
};

export default Login;
