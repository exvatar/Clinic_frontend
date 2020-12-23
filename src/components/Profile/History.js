import React, { useState } from 'react'
import { Card, Pagination } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

function History(props) {
    const history = props.history;
    const [idxItem, setIdxItem] = useState(1)
    let setHistory = []

    const setArrayHistory = () => {
        let tempHistory = []
        for (let index = 0; index < history.length; index++) {
            tempHistory.push(history[index]);
            if (tempHistory.length === 3) {
                setHistory.push(tempHistory)
                tempHistory = []
            }
        }
        if (tempHistory) {
            setHistory.push(tempHistory)
            tempHistory = []
        }
    }
    setArrayHistory()
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "15px 15px 15px 25px",
                width: "100%",
                height: "100%"
            }}>
                {setHistory[idxItem - 1].map((item, idx) => {
                    return (
                        <Card
                            title="Treatment Detail"
                            style={{ margin: "10px", width: "30%", height: "inherit" }}
                        >
                            <p>Clinic : {item.Clinic.name}</p>
                            <p>Date : {item.reservationDate}</p>
                            <p>Docter : {item.Docter?.firstName} {item.Docter?.lastName}</p>
                            <p>Type : {item.Type.name}</p>
                            <p>Detail :</p>
                            <TextArea></TextArea>
                        </Card>
                    )
                })}
            </div>
            <Pagination
                defaultCurrent={1}
                pageSize={3}
                total={history.length}
                onChange={(current) => setIdxItem(current)}>
            </Pagination>
        </div>

    )
}

export default History
