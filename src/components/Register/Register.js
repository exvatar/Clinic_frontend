import React, { useState } from 'react'

import './Register.css'

function Register(props) {
    const onClickChangeBox = props.onClickChangeBox;
    return (
        <div className="dpFlex jContent">
            <div className="bg_form_register ">
                <form className="form_register">
                    <div className="form_item_register">
                        <label>First name</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>Last name</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>email</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>password</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>birthday</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>gender</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>id card number</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>adress</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>Mobile number</label>
                        <input></input>
                    </div>
                    <div className="form_item_register">
                        <label>Home number</label>
                        <input></input>
                    </div>
                </form>
                <button onClick={() => onClickChangeBox()}>Save</button>
            </div>
        </div>
    )
}

export default Register
