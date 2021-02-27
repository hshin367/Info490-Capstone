import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import "./RegistrationForm.css";


const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Date of Birth* (yyyy/mm/dd)',
      },
    ],
  };
  
  
const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div id="registtration-panel">
      <h1>LOGO RESTORE</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="First Name"
          rules={[
            {
              required: true,
              message: 'Please input your First Name!',
            },
          ]}
        >
          <Input placeholder="First Name*"/>
        </Form.Item>
        <Form.Item
          name="Last Name"
          rules={[
            {
              required: true,
              message: 'Please input your Last Name!',
            },
          ]}
        >
          <Input placeholder="Last Name*"/>
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input placeholder="Email*"/>
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
            placeholder="Phone Number*"
          />
        </Form.Item>

        <Form.Item 
          name="date-picker"
          rules={[
            {type: 'object',
              required: true,
              message: 'Date of Birth* (yyyy/mm/dd)',
            }
          ]}>
          <DatePicker style={{
              width: '100%',
            }}
            placeholder="Date of Birth* (yyyy/mm/dd)"
          />
        </Form.Item>
        <Form.Item
          name="City"
          rules={[
            {
              required: true,
              message: 'Please input your City!',
            },
          ]}
        >
          <Input placeholder="City*"/>
        </Form.Item>
        <Form.Item
          name="State"
          rules={[
            {
              required: true,
              message: 'Please input your State!',
            },
          ]}
        >
          <Input placeholder="State*"/>
        </Form.Item>

        <Form.Item
          name="Zip Code"
          rules={[
            {
              required: true,
              message: 'Please input your Zip Code!',
            },
          ]}
        >
          <Input placeholder="Zip Code*"/>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Username"/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password*"/>
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password*"/>
        </Form.Item>


       



        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">Terms or Service and Privacy Policy</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{backgroundColor:"white", color:"#081d69"}}>
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;