import { Card } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'

function Sumerrize() {
    return (
        <div>
            <Card
                title="Detail Reservation"
            >
                <p>Clinic : Clinic 1</p>
                <p>Date : 12/18/2020</p>
                <p>Detail :</p>
                <TextArea></TextArea>
            </Card>
        </div>
    )
}

export default Sumerrize

