import React, { useEffect, useState } from 'react'
import { Card, Pagination, Button, message } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import axios from '../../config/axios';

function Reservation(props) {
  const reservation = props.reservation;
  const setReservation = props.setReservation;
  const [idxItem, setIdxItem] = useState(1)
  const [idxItemQue, setIdxItemQue] = useState(1)

  let onlyReservation = [];
  let inQueReservation = [];

  for (let index = 0; index < reservation.length; index++) {
    if (reservation[index].status === "IN QUE") {
      inQueReservation.push(reservation[index]);
    } else if (reservation[index].status === "RESERVE") {
      onlyReservation.push(reservation[index])
    }
  }

  let newArrayReservation = [];
  let newInQueReservation = [];

  const setArrayInQueReservation = () => {
    let tempReservation = []
    for (let index = 0; index < inQueReservation.length; index++) {
      tempReservation.push(inQueReservation[index]);
      if (tempReservation.length === 3) {
        newInQueReservation.push(tempReservation)
        tempReservation = []
      }
    }
    if (tempReservation.length != 0) {
      newInQueReservation.push(tempReservation)
      tempReservation = []
    }
  }
  const setArrayReservation = () => {
    let tempReservation = []
    for (let index = 0; index < onlyReservation.length; index++) {
      tempReservation.push(onlyReservation[index]);
      if (tempReservation.length === 3) {
        newArrayReservation.push(tempReservation)
        tempReservation = []
      }
    }
    if (tempReservation.length != 0) {
      newArrayReservation.push(tempReservation)
      tempReservation = []
    }
  }
  setArrayReservation();
  setArrayInQueReservation();

  const onClickAddtoQue = (id) => {
    axios.put('/reservation/updateReservation', {
      "reservationId": id,
      "status": "IN QUE"
    })
      .then(res => {
        message.success('Processing complete!');
        axios.get("/reservation/getAllReservationByDate")
          .then(res => {
            setReservation(res.data.allReservation);
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  const onClickCancelFromQue = (id) => {
    axios.put('/reservation/updateReservation', {
      "reservationId": id,
      "status": "RESERVE"
    })
      .then(res => {
        message.success('Processing complete!');
        axios.get("/reservation/getAllReservationByDate")
          .then(res => {
            setReservation(res.data.allReservation);
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  const [detail, setDetail] = useState("")
  const onClickUpdate = (id) => {
    axios.put('/reservation/updateReservation', {
      "reservationId": id,
      "status": "SUCCESS",
      "detail": detail
    })
      .then(res => {
        message.success('Processing complete!');
        axios.get("/reservation/getAllReservationByDate")
          .then(res => {
            setReservation(res.data.allReservation);
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <div style={{
        width: "100%",
      }}>
        <div style={{
          width: "100%",
          marginLeft: "150px"
        }}>
          <h1>In Que</h1>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {newInQueReservation[idxItemQue - 1]?.map((item, idx) => {
            return (
              <Card
                key={idx}
                title="Treatment Detail"
                style={{ margin: "10px", width: "30%", height: "inherit" }}
              >
                <p>Clinic : {item.Clinic.name}</p>
                <p>Date : {item.reservationDate}</p>
                <p>Docter : {item.Docter?.firstName} {item.Docter?.lastName}</p>
                <p>Type : {item.Type.name}</p>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}>
                  <p>Customer : {item.User.firstName} {item.User.lastName}</p>
                  <Button>Detail</Button>
                </div>
                <p>Status : {item.status}</p>
                <p>Detail :</p>
                <TextArea onChange={(e) => { setDetail(e.target.value) }}></TextArea>
                <div style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px"
                }}>
                  <Button type="primary" onClick={() => { onClickUpdate(item.id) }}>Update Case</Button>
                  <Button danger onClick={() => {
                    onClickCancelFromQue(item.id)
                  }}>Cancel</Button>
                </div>
              </Card>
            )
          })}
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
            total={inQueReservation.length}
            onChange={(current) => setIdxItemQue(current)}>
          </Pagination>
        </div>
      </div>
      <div style={{
        width: "90%",
        borderBottom: "1px solid #1890ff",
        opacity: "30%",
        marginTop: "15px"
      }}>

      </div>
      <div style={{
        width: "100%",
      }}>
        <div style={{
          width: "100%",
          marginLeft: "150px"
        }}>
          <h1>Reservation this day</h1>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {newArrayReservation[idxItem - 1]?.map((item, idx) => {
            return (
              <Card
                title="Reservation Detail"
                style={{ margin: "10px", width: "30%", height: "inherit" }}
              >
                <p>Clinic : {item.Clinic.name}</p>
                <p>Date : {item.reservationDate}</p>
                <p>Docter : {item.Docter?.firstName} {item.Docter?.lastName}</p>
                <p>Type : {item.Type.name}</p>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}>
                  <p>Customer : {item.User.firstName} {item.User.lastName}</p>
                  <Button>Detail</Button>
                </div>
                <p>Status : {item.status}</p>
                <p>Detail :</p>
                <TextArea></TextArea>
                <div style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px"
                }}>
                  <Button type="primary" onClick={() => onClickAddtoQue(item.id)}>Add to que</Button>
                </div>
              </Card>
            )
          })}
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
            total={onlyReservation.length}
            onChange={(current) => setIdxItem(current)}>
          </Pagination>
        </div>
      </div>
    </>
  )
}

export default Reservation
