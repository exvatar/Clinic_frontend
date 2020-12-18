import React from 'react'
import { Calendar } from 'antd';
import moment from 'moment';

function Date() {
    function onPanelChange(value, mode) {
        console.log(value.format('DD-MM-YYYY'), mode);
    }
    return (
        <Calendar
            fullscreen={false}
            onPanelChange={onPanelChange}
            onSelect={(e) => console.log(moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss"))}
        />
    )
}

export default Date
