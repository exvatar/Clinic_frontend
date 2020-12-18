import React from 'react'
import { Steps, Button, message } from 'antd';
import Clinic from './Clinic';
import Date from './Date';
import Sumerrize from './Sumerrize'
const { Step } = Steps;

const steps = [
    {
        title: 'Clinic',
        content: <Clinic></Clinic>,
    },
    {
        title: 'Date',
        content: <Date></Date>,
    },
    {
        title: 'Finish',
        content: <Sumerrize></Sumerrize>,
    },
];

function Reserv() {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

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
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
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
