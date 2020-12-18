import { Card, Input } from 'antd'
import React from 'react'

function Profiles() {
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
                        <Input style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Last name : </label>
                        <Input style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Email : </label>
                        <Input style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Birth day : </label>
                        <Input style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Gender : </label>
                        <Input style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Id card : </label>
                        <Input style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Phone : </label>
                        <Input style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Home phone : </label>
                        <Input style={{ }}></Input>
                    </div>
                    <div style={{
                        width: "100%",
                        display:"flex",
                        margin:"5px"
                    }}>
                        <label style={{width:"25%"}}>Address : </label>
                        <Input style={{ }}></Input>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Profiles
