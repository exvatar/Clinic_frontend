import React from 'react'
import { Card, Pagination } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

function History() {
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "15px 15px 15px 25px",
                width: "100%",
                height: "100%"
            }}>
                <Card
                    title="Treatment Detail"
                    style={{ margin: "10px", width: "30%", height: "45%" }}
                >
                    <p>Clinic : Clinic 1</p>
                    <p>Date : 12/18/2020</p>
                    <p>Detail :</p>
                    <TextArea></TextArea>
                </Card>
                <Card
                    title="Treatment Detail"
                    style={{ margin: "10px", width: "30%", height: "45%" }}
                >
                    <p>Clinic : Clinic 1</p>
                    <p>Date : 12/18/2020</p>
                    <p>Detail :</p>
                    <TextArea></TextArea>
                </Card>
                <Card
                    title="Treatment Detail"
                    style={{ margin: "10px", width: "30%", height: "45%" }}
                >
                    <p>Clinic : Clinic 1</p>
                    <p>Date : 12/18/2020</p>
                    <p>Detail :</p>
                    <TextArea></TextArea>
                </Card>
                <Card
                    title="Treatment Detail"
                    style={{ margin: "10px", width: "30%", height: "45%" }}
                >
                    <p>Clinic : Clinic 1</p>
                    <p>Date : 12/18/2020</p>
                    <p>Detail :</p>
                    <TextArea></TextArea>
                </Card>
                <Card
                    title="Treatment Detail"
                    style={{ margin: "10px", width: "30%", height: "45%" }}
                >
                    <p>Clinic : Clinic 1</p>
                    <p>Date : 12/18/2020</p>
                    <p>Detail :</p>
                    <TextArea></TextArea>
                </Card>
                <Card
                    title="Treatment Detail"
                    style={{ margin: "10px", width: "30%", height: "45%" }}
                >
                    <p>Clinic : Clinic 1</p>
                    <p>Date : 12/18/2020</p>
                    <p>Detail :</p>
                    <TextArea></TextArea>
                </Card>
                
            </div>
            <Pagination defaultCurrent={6} total={500}></Pagination>
        </div>

    )
}

export default History
