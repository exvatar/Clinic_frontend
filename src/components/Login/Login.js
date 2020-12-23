import React, { useState, useRef } from 'react'
import axios from "../../config/axios";
import { Form, Input, notification, Button } from "antd";
import LocalStorageService from "../../services/localStorage";

function Login(props) {
    const onClickChangeBox = props.onClickChangeBox;
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const [form] = Form.useForm();
    const formRef = useRef(null)

    const onFinish = (values) => {
        const { email, password } = values
        axios
            .post("/users/login", { email, password })
            .then((res) => {
                notification.success({
                    description: "Login success",
                });
                LocalStorageService.setToken(res.data.token, res.data.role);
                // props.history.push("/");
                if (res.data.role === '1') {
                    props.setRole("CLINIC");
                } else {
                    props.setRole("USER");
                }
            })
            .catch((err) => {
                console.log(err);
                notification.error({
                    description: "Login failed",
                });
            });
    }
    return (
        <div className="bg_Login">
            <div className="padding20" style={{ display: "flex" }}>
                <Form
                    {...layout}
                    name="login"
                    form={form}
                    ref={formRef}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <div style={{
                        display: "flex",
                        width: "100%"
                    }}>
                        <Form.Item {...tailLayout} style={{
                            width: "50%"
                        }}>
                            <Button type="primary" htmlType="submit">
                                Login
                        </Button>
                        </Form.Item>
                        <Form.Item {...tailLayout} style={{
                            width: "50%"
                        }}>
                            <a onClick={() => onClickChangeBox()}>Create Account</a>
                        </Form.Item>
                    </div>
                </Form>
                {/* <button onClick={() => onClickChangeBox()}>Create Account</button> */}
            </div>
        </div>
    )
}

export default Login
