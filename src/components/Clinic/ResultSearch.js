import React, { useEffect, useState } from 'react'
import { Card, Pagination, Button, message } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import axios from '../../config/axios';

function ResultSearch(props) {
  const resultSearch = props.resultSearch;
  const [idxItem, setIdxItem] = useState(1)
  const setReservation = props.setReservation;
  let newArrayReservation = [];
  const setArrayInQueReservation = () => {
    let tempReservation = []
    for (let index = 0; index < resultSearch.length; index++) {
      if (resultSearch[index].status === "RESERVE") {
        tempReservation.push(resultSearch[index]);
      }
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
  return (
    <>
      <div style={{
        width: "100%",
      }}>
        <div style={{
          width: "100%",
          marginLeft: "150px"
        }}>
          <h1>Result Search</h1>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {newArrayReservation[idxItem - 1]?.map((item, idx) => {
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
                <TextArea></TextArea>
                <div style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px"
                }}>
                  <Button type="primary" onClick={() => { onClickAddtoQue(item.id) }}>Add to que</Button>
                  {/* <Button danger onClick={() => {
                    onClickCancelFromQue(item.id)
                  }}>Cancel</Button> */}
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
            total={newArrayReservation.length}
            onChange={(current) => setIdxItem(current)}>
          </Pagination>
        </div>
      </div>
    </>
  )
}

export default ResultSearch
