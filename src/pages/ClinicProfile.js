import React, { useEffect, useState } from 'react'
import NavbarClinic from '../components/Navbar/NavbarClinic'
import { Menu } from 'antd';
import Profile from '../components/Clinic/Profile';
import axios from '../config/axios';
import CaseReservation from '../components/Clinic/CaseReservation';

function ClinicProfile() {
  const [menuComponent, setMenuComponent] = useState(1)
  const [clinic, setClinic] = useState([])
  const [reservation, setReservation] = useState([])

  useEffect(() => {
    axios.get("/clinic")
      .then(res => {
        setClinic(res.data.allClinic);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  useEffect(() => {
    axios.get("/reservation/getAllReservationByClinicId")
      .then(res => {
        setReservation(res.data.allReservation);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  return (
    <div style={{
      height: "100vh"
    }}>
      <NavbarClinic></NavbarClinic>
      <div style={{
         display: "flex",
         flexDirection: "row",
         width: "100%",
         height: "100%",
         paddingTop: "120px"
      }}>
        <div>
          <Menu style={{
            width: "200px",
            marginTop: "20px",
            marginLeft: "15px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
          }}>
            <Menu.Item key="1" onClick={() => setMenuComponent(1)}>
              Profile
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setMenuComponent(2)}>
              History
            </Menu.Item>
          </Menu>
        </div>
        <div style={{
          padding: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}>
          {
            menuComponent === 1 ?
              <Profile clinic={clinic}></Profile> :
              <CaseReservation reservation={reservation}></CaseReservation>
          }
        </div>
      </div>
    </div>
  )
}

export default ClinicProfile
