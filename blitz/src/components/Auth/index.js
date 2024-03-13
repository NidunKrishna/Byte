import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Auth.css'; 

const LearnerLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      await axios.post('http://localhost:8001/api/insert', formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="learner-login-container">
      <div className="learner-login-form">
        <h1>Learner Login</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 900 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input onChange={handleChange} />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password onChange={handleChange} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
          <Link to="/forgot-password">Forgot password?</Link>
        </Form>
      </div>
    </div>
  );
};

export default LearnerLogin;
