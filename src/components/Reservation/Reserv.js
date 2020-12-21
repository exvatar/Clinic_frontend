import React, { useState } from 'react'
import { Steps, Button, message } from 'antd';
import Clinic from './Clinic';
import Date from './Date';
import Sumerrize from './Sumerrize'
import axios from '../../config/axios'
const { Step } = Steps;


function Reserv(props) {
    const [current, setCurrent] = useState(0);
    const [clinic, setClinic] = useState()
    const [docter, setDocter] = useState([])
    const [date, setDate] = useState("")
    const [type, setType] = useState("")

    const done = () => {
        axios.post(`/reservation`, {
            "reservationDate": date,
            "createAt": "2537/01/01",
            "updateAt": "2537/01/01",
            "detail": "จัดฟัน",
            "clinic_id": clinic.id,
            "docter_id": docter.id,
            "type_id": type.id
        })
            .then(res => {
                console.log(res)
                message.success('Processing complete!')
            })
            .catch(err => {
                console.log(err)
            })
    }
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Clinic',
            content: <Clinic next={next} setClinic={setClinic} clinic={props.clinic}></Clinic>,
        },
        {
            title: 'Date',
            content: <Date next={next} clinic={clinic} setDate={setDate} setDocter={setDocter} docter={docter} setType={setType}></Date>,
        },
        {
            title: 'Finish',
            content: <Sumerrize next={next} clinic={clinic} date={date} docter={docter} type={type}></Sumerrize>,
        },
    ];

    return (
        <>
            <div style={{
                width: "500px",
            }}>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
            </div>

            <div className="steps-content" style={{ width: "500px", margin: "7px" }}>
                {steps[current].content}
            </div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => {
                        done()
                    }}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    )
}

export default Reserv
