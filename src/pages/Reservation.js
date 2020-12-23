import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Reserv from '../components/Reservation/Reserv'
import axios from '../config/axios';

function Reservation(props) {
  const [clinic, setClinic] = useState([])

  useEffect(() => {
    axios.get("/clinic")
      .then(res => {
        setClinic(res.data.allClinic);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div style={{
        marginTop: "110px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Reserv clinic={clinic}></Reserv>
      </div>
    </>
  )
}

export default Reservation
