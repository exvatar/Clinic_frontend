import React, { useState, useRef } from 'react'
import { Form, Input, notification, Button } from "antd";
import './Register.css'
import axios from "../../config/axios";

function Register(props) {
    const onClickChangeBox = props.onClickChangeBox;
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const [form] = Form.useForm();
    const formRef = useRef(null)

    const onFinish = values => {
        const { firstName, lastName, email, password, birthDay, gender, idCard, address, mobilePhone, homePhone } = values;
        axios.post("/users/register",
            {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "birthday": birthDay,
                "gender": gender,
                "idCardNumber": idCard,
                "address": address,
                "mobilePhone": mobilePhone,
                "homePhone": homePhone
            })
            .then((res) => {
                console.log(res)
                notification.success({
                    description: "Register success",
                });
                onClickChangeBox()
            })
            .catch((err) => {
                console.log(err)
                notification.error({
                    description: "Register failed",
                });
            })
    }
    return (
        <div className="dpFlex jContent">
            <div className="bg_form_register ">
                <Form
                    {...layout}
                    form={form}
                    ref={formRef}
                    name="register"
                    onFinish={onFinish}
                    className="form_register"
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <div style={{
                        width: "50%"
                    }}>
                        <Form.Item
                            label="First name"
                            name="firstName"
                            rules={[{ required: true, message: 'Please input your first name!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Birth date"
                            name="birthDay"
                            rules={[{ required: false }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="ID Card"
                            name="idCard"
                            rules={[{ required: false }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Mobile number"
                            name="mobileNumber"
                            rules={[{ required: false }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div style={{
                        width: "50%"
                    }}>
                        <Form.Item
                            label="Last name"
                            name="lastName"
                            rules={[{ required: true, message: 'Please input your last name!' }]}
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

                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{ required: false }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: false }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Home phone"
                            name="homePhone"
                            rules={[{ required: false }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                    </Button>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" onClick={() => {onClickChangeBox()}}>
                            Cancel
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Register
