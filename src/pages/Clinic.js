import React, { useEffect, useState } from 'react'
import NavbarClinic from '../components/Navbar/NavbarClinic'
import { Input } from 'antd';
import Reservation from '../components/Clinic/Reservation';
import axios from '../config/axios';
import ResultSearch from '../components/Clinic/ResultSearch';
const { Search } = Input;

function Clinic() {
    const [reservation, setReservation] = useState([])
    const [resultSearch, setResultSearch] = useState([])
    useEffect(() => {
        axios.get("/reservation/getAllReservationByDate")
            .then(res => {
                setReservation(res.data.allReservation);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    const onSearch = value => {
        let tempResultSearch = []
        for (let index = 0; index < reservation.length; index++) {
            if (reservation[index].User.email == value) {
                tempResultSearch.push(reservation[index])
            }
        }
        setResultSearch(tempResultSearch)
    };
    return (
        <div style={{
            width: "100%"
        }}>
            <NavbarClinic></NavbarClinic>
            <div style={{
                marginTop: "100px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Search
                    placeholder="input your email"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    style={{
                        width: "30%"
                    }}
                />
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                {resultSearch.length !== 0  ?
                    <ResultSearch reservation={reservation} resultSearch={resultSearch} setReservation={setReservation}></ResultSearch>
                    :
                    <Reservation reservation={reservation} setReservation={setReservation}>
                    </Reservation>}
            </div>
        </div>
    )
}

export default Clinic
