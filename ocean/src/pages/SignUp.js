import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Select, Row, Col, Checkbox, DatePicker } from "antd";
import "./Login.css";
import { Bg, Container, TextBox, SignUpFormContainer } from "./styles/style.js";
import { SignupButton } from "../components/Button/button.js";
import { LogoText, LogoImage } from "../components/Logo/style";
import Logo from "../components/Logo/Logo";
import { borderRadius } from "polished";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 22,
    },
    sm: {
      span: 23,
    },
  },
  wrapperCol: {
    xs: {
      span: 22,
    },
    sm: {
      span: 20,
    },
  },
};

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Date of Birth* (yyyy/mm/dd)",
    },
  ],
};

const RegistrationForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [handle, setHandle] = useState();

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  });

  function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
  }

  function signUp() {
    let item = { email, password, confirmPassword, handle };
    console.warn(item);

    fetch("https://us-central1-restore-uw.cloudfunctions.net/api/signup", {
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
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [form] = Form.useForm();
  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const name = (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="First Name"
          rules={[
            {
              required: true,
              message: "Please input your First Name!",
            },
          ]}
          style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
        >
          <Input placeholder="First Name*" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="Last Name"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}
          style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
        >
          <Input placeholder="Last Name*" />
        </Form.Item>
      </Col>
    </Row>
  );

  const date = (
    <>
      <Form.Item
        name="date-picker"
        rules={[
          {
            type: "object",
            required: true,
            message: "Date of Birth* (yyyy/mm/dd)",
          },
        ]}
        style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
      >
        <DatePicker
          style={{
            width: "100%",
          }}
          placeholder="Date of Birth* (yyyy/mm/dd)"
        />
      </Form.Item>
    </>
  );

  const emailPhone = (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
          style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
        >
          <Input
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
          style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
        >
          <Input
            style={{
              width: "100%",
            }}
            placeholder="Phone Number"
          />
        </Form.Item>
      </Col>
    </Row>
  );

  const accountInfo = (
    <>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
            whitespace: true,
          },
        ]}
        style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
      >
        <Input
          placeholder="Username"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
        style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
      >
        <Input.Password
          placeholder="Password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            },
          }),
        ]}
        style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
      >
        <Input.Password
          placeholder="Confirm Password*"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Item>
    </>
  );

  const location = (
    <Row gutter={24}>
      <Col span={8}>
        <Form.Item
          name="City"
          rules={[
            {
              required: true,
              message: "Please input your City!",
            },
          ]}
          style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
        >
          <Input placeholder="City*" />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item
          name="State"
          rules={[
            {
              required: true,
              message: "Please input your State!",
            },
          ]}
          style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
        >
          <Input placeholder="State*" />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item
          name="Zip Code"
          rules={[
            {
              required: true,
              message: "Please input your Zip Code!",
            },
          ]}
          style={{backgroundColor:"rgba(15, 25, 65, 0.6)", borderRadius:"8px"}}
        >
          <Input placeholder="Zip Code" />
        </Form.Item>
      </Col>
    </Row>
  );

  const agreement = (
    <>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("Should accept agreement"),
          },
        ]}
      >
        <Checkbox>
          <TextBox color="white" display="inline">
            I have read and agree to the Terms and Service
            <a href=""> </a>
          </TextBox>
        </Checkbox>
      </Form.Item>
    </>
  );

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <Bg style={{justifyContent:"center"}}>
      <Container style={{justifyContent:"center", backdropFilter:"blur(3px)"}}>
        <Row>
          <SignUpFormContainer
            backgroundColor="opaque"
            width="600px"
            borderRadius=""
            justifyContent="left"
          >
            <Row>
              <Row>
                <LogoText style={{marginBottom:"10%"}}>Create Account</LogoText>
              </Row>
              <Row justify="space-around" wrap="nowrap">
                <Col span={17}>
                  <Form
                    // {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                    className="signup"
                  >
                    {name}
                    {emailPhone}
                    {location}
                    {accountInfo}
                    {agreement}
                    <Form.Item className="button-form">
                      <SignupButton onClick={signUp} style={{backgroundColor:"rgba(255, 255, 255, 0.2)", color:"white", width:"100%"}}>
                        Create Account
                      </SignupButton>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Row>
          </SignUpFormContainer>
        </Row>
      </Container>
    </Bg>
  );
};

export default RegistrationForm;
