import { Card, Input } from 'antd'
import React from 'react'

function Profiles(props) {
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
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Name : </label>
                        <Input value={props.profile.firstName} style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Last name : </label>
                        <Input value={props.profile.lastName} style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Email : </label>
                        <Input value={props.profile.email} style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Birth day : </label>
                        <Input value={props.profile.birthday} style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Gender : </label>
                        <Input value={props.profile.gender} style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Id card : </label>
                        <Input value={props.profile.idCardNumber} style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Phone : </label>
                        <Input value={props.profile.mobilePhone} style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Home phone : </label>
                        <Input value={props.profile.homePhone} style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Address : </label>
                        <Input value={props.profile.address} style={{ }}></Input>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Profiles
