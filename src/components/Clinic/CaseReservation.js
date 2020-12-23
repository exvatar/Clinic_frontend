import React, { useState } from 'react'
import { Card, Pagination } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

function CaseReservation(props) {
  const reservation = props.reservation
  const [idxItem, setIdxItem] = useState(1)
  let setReservation = []

  const setArrayReservation = () => {
    let tempReservation = []
    for (let index = 0; index < reservation.length; index++) {
      tempReservation.push(reservation[index]);
      if (tempReservation.length === 3) {
        setReservation.push(tempReservation)
        tempReservation = []
      }
    }
    if (tempReservation) {
      setReservation.push(tempReservation)
      tempReservation = []
    }
  }
  setArrayReservation()
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    }}>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "15px 15px 15px 25px",
        width: "100%",
        height: "100%"
      }}>
        {
          setReservation[idxItem - 1].map((item, idx) => {
            return (
              <Card
                title="Treatment Detail"
                style={{ margin: "10px", width: "30%", height: "inherit" }}
              >
                <p>Clinic : {item.Clinic.name}</p>
                <p>Date : {item.reservationDate}</p>
                <p>Docter : {item.Docter?.firstName} {item.Docter?.lastName}</p>
                <p>Type : {item.Type.name}</p>
                <p>Customer : {item.User.firstName} {item.User.lastName}</p>
                <p>Status : {item.status}</p>
                <p>Detail :</p>
                <TextArea value={item.detail}></TextArea>
                <div style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px"
                }}>

                </div>
              </Card>
            )
          })
        }
      </div>
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Pagination
          defaultCurrent={1}
          pageSize={3}
          total={reservation.length}
          onChange={(current) => setIdxItem(current)}>
        </Pagination>
      </div>
    </div>
  )
}

export default CaseReservation
