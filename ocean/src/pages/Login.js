import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import history from "../Routes/history";
import { Form, Input, Button, Row, Checkbox, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Bg, LoginContainer, TextBox, SignUpFormContainer, Container } from "./styles/style.js";
import { LogoText, LogoImage } from "../components/Logo/style.js";
import "./Login.css";
import logo from "../img/Logo.png";
import { opacify } from "polished";

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
      <Container style={{width:"90%"}}>
        <SignUpFormContainer style={{height:"75%", backdropFilter:"blur(3px)", padding:"0"}}>
          <div style={{backgroundColor:"rgba(255, 255, 255, 0.3)", borderRadius:"15px 0px 0px 15px", width:"40%"}}>
            <div style={{margin:"15% 10% 0% 10%"}}>
              <LogoText alignCenter style={{fontSize:"2rem"}}> RESTORE </LogoText>
              <Row justify="space-around" wrap="nowrap">
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  style={{textAlign:"center", paddingTop:"5%"}}
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
                      style={{backgroundColor:"rgba(15, 25, 65, 0.6)"}}
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
                      style={{backgroundColor:"rgba(15, 25, 65, 0.6)"}}
                    />
                  </Form.Item>
                    <u style={{color:"white"}}>Forgot Password?</u>
                  <Button
                    htmlType="submit"
                    className="login-form-button"
                    id="form-btn"
                    onClick={login}
                    style={{borderRadius:"5px", backgroundColor:"rgba(255, 255, 255, 0.2)", margin:"15% 0% 10% 0%"}}
                  >
                    Sign In
                  </Button>
                
                  <h3 style={{color:"white"}}>Not a member? <Link to={{ pathname: "/signup" }} style={{color:"white", textDecoration:"underline"}}>Sign Up</Link> now!</h3>
                </Form>
              </Row>
            </div>
          </div>
          <div style={{backgroundColor:"rgba(255, 255, 255, 0.1)", borderRadius:"0px 15px 15px 0px", width:"60%"}}>
              <div style={{margin:"25% 10% 0% 10%", width:"50%"}}>
                
                <h2 style={{color:"white", fontSize:"2rem"}}>Welcome to RESTORE</h2>
                <h3 style={{color:"white", fontSize:"0.85rem"}}>"The greatest danger to our planet is the belief that someone else will <b> save it</b>"</h3>
                
                <Button htmlType="button" id="form-btn" style={{borderRadius:"5px", width:"150px", textAlign:"center", fontSize:"100%", marginTop:"5%"}}>
                  <a href="https://sdgs.un.org/goals/goal14">Save Our Oceans</a>
                </Button>

              </div>
          </div>
        </SignUpFormContainer>
      </Container>
    </Bg>
  );
};

export default Login;
