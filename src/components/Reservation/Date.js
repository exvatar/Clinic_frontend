import React, { useEffect, useState } from 'react'
import { Calendar, Select } from 'antd';
import moment from 'moment';
import axios from '../../config/axios';

function Date(props) {
    const next = props.next;
    const setDate = props.setDate;
    const setDocter = props.setDocter;
    const setType = props.setType;
    const clinic = props.clinic;
    const [allDocter, setAllDocter] = useState()
    const [allType, setAllType] = useState()

    useEffect(() => {
        axios.get(`/docter/${clinic.id}`)
            .then(res => {
                setAllDocter(res.data.allDocter);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    useEffect(() => {
        axios.get(`/type`)
            .then(res => {
                setAllType(res.data.allType);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);



    const Option = Select;
    function onChange(value) {
        console.log(`selected ${value}`);
        for (let index = 0; index < allDocter.length; index++) {
            if (allDocter[index].id === value) {
                setDocter(allDocter[index]);
            }
        }
    }
    function onChangeType(value) {
        console.log(`selected ${value}`);
        for (let index = 0; index < allType.length; index++) {
            if (allType[index].id === value) {
                setType(allType[index]);
            }
        }
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    return (
        <>
            <p>Clinic name : {clinic.name}</p>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Type"
                optionFilterProp="children"
                onChange={onChangeType}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }>
                {allType && allType.map((item, idx) => {
                    return (
                        <Option value={item.id}>{item.name}</Option>
                    )
                })}

            </Select>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Docter"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }>

                {allDocter && allDocter.map((item, idx) => {
                    return (
                        <Option value={item.id}>{item.firstName} {item.lastName}</Option>
                    )
                })}

            </Select>
            <Calendar
                fullscreen={false}
                // onPanelChange={onPanelChange}
                onSelect={(e) => {
                    setDate(moment(e._d).format('L'))
                    next()
                }}
            />
        </>
    )
}

export default Date
