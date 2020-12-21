import React from 'react'
import { Link, useHistory } from "react-router-dom";
import LocalStorageService from "../../services/localStorage";
function Navbar() {
    const history = useHistory();

    return (
        <header className="header">
            <h1 className="logo"><a href="#">Clinic</a></h1>
            <ul className="main-nav">
                <Link to="/">
                    Home
                </Link>
                <Link to="/profile">
                    Profile
                </Link>
                <a onClick={() => {
                    LocalStorageService.clearToken();
                    history.push("/");
                    window.location.reload();
                }}>
                    Log out
                </a>
            </ul>
        </header>
    )
}

export default Navbar
