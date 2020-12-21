import React, { useState } from 'react'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'

function Home(props) {
    const [box, setBox] = useState(true)
    const onClickChangeBox = () => {
        setBox((box) => !box)
        console.log(box)
    }
    return (
        <div className="bg_home">
            <div className="w100per">Logo</div>
            <div className="w100per">
                {
                    box ?
                        <Login onClickChangeBox={onClickChangeBox} setRole={props.setRole}></Login>
                        :
                        <Register onClickChangeBox={onClickChangeBox}></Register>
                }
            </div>
        </div>
    )
}

export default Home
