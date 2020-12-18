import React, { useState } from 'react'
import axios from "../../config/axios";
import { Input, notification } from "antd";
import LocalStorageService from "../../services/localStorage";

function Login(props) {
    const onClickChangeBox = props.onClickChangeBox;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onClickLogin = (e) => {
        axios
            .post("/users/login", { email, password })
            .then((res) => {
                notification.success({
                    description: "Login success",
                });
                LocalStorageService.setToken(res.data.token, res.data.role);
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
            <div className="padding20">
                <form>
                    <div>
                        <label>Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input onChange={(e) => { setPassword(e.target.value) }}></input>
                    </div>
                </form>
                <button onClick={() => onClickLogin()}>Login</button>
                <button onClick={() => onClickChangeBox()}>Create Account</button>
            </div>
        </div>
    )
}

export default Login
