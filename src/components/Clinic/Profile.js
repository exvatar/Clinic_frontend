import React from 'react'
import { Card, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

function Profile(props) {
    let name, email, phone, address, openTime, closeTime;
    if (props.clinic[0]) {
        name = props.clinic[0].name;
        email = props.clinic[0].email;
        phone = props.clinic[0].phone;
        address = props.clinic[0].address;
        openTime = props.clinic[0].openTime;
        closeTime = props.clinic[0].closeTime;
    }
    return (
        <div style={{

        }}>
            <Card title="Profile Details">
                <div style={{
                    display: "",
                    width: "500px"
                }}>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        margin: "5px"
                    }}>
                        <label style={{ width: "25%" }}>Name : </label>
                        <Input value={name} style={{}}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        margin: "5px"
                    }}>
                        <label style={{ width: "25%" }}>Email : </label>
                        <Input value={email} style={{}}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        margin: "5px"
                    }}>
                        <label style={{ width: "25%" }}>Phone : </label>
                        <Input value={phone} style={{}}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        margin: "5px"
                    }}>
                        <label style={{ width: "25%" }}>Address : </label>
                        <Input value={address} style={{}}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        margin: "5px"
                    }}>
                        <label style={{ width: "25%" }}>Open Time : </label>
                        <Input value={openTime} style={{}}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        margin: "5px"
                    }}>
                        <label style={{ width: "25%" }}>Close Time : </label>
                        <Input value={closeTime} style={{}}></Input>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Profile
