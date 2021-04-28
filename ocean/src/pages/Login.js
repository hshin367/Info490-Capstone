import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import history from "../Routes/history";
import { Form, Input, Button, Row, Checkbox, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Bg, LoginContainer, TextBox, SignUpFormContainer, Container } from "./styles/style.js";
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
    <Bg style={{justifyContent:"center"}}>
      <Container>
        <SignUpFormContainer>
          <div style={{backgroundColor:"rgba(255, 255, 255, 0.4)"}}>
            <Row>
              <LogoText alignCenter> RESTORE </LogoText>
            </Row>
            <Row justify="space-around" wrap="nowrap">
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

              <Button
                htmlType="submit"
                className="login-form-button"
                id="form-btn"
                onClick={login}
              >
                Sign In
              </Button>

              <h3 style={{color:"white"}}>Not a member? <Link to={{ pathname: "/signup" }} style={{color:"white", textDecoration:"underline"}}>Sign Up</Link> now!</h3>
              
            </Form>
            </Row>
          </div>
          <div style={{backgroundColor:"rgba(255, 255, 255, 0.2)"}}>
                <h2 style={{color:"white"}}>Welcome to RESTORE</h2>
                <h3 style={{color:"white"}}>"The greatest danger to our planet is the belief that someone else will save it"</h3>
                
                <Button htmlType="button" id="form-btn">
                  <a href="https://sdgs.un.org/goals/goal14">Save Our Oceans</a>
                </Button>
          </div>
        </SignUpFormContainer>
      </Container>
    </Bg>
  );
};

export default Login;
