import { Card } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'

function Sumerrize(props) {
    const clinic = props.clinic;
    const docter = props.docter;
    const type = props.type;
    console.log(type)
    return (
        <div>
            <Card
                title="Detail Reservation"
            >
                <p>Clinic : {clinic.name}</p>
                <p>Date : {props.date}</p>
                <p>Docter : {docter.firstName} {docter.lastName}</p>
                <p>Type : {type.name}</p>
                <p>Detail :</p>
                <TextArea></TextArea>
            </Card>
        </div>
    )
}

export default Sumerrize

