import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Reserv from '../components/Reservation/Reserv'

function Reservation() {
    return (
        <>
            <Navbar></Navbar>
            <div style={{
                marginTop:"35px",
                width:"100%",
                height:"100%",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                <Reserv></Reserv>
            </div>
        </>
    )
}

export default Reservation
