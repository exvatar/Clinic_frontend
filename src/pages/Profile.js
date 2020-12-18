import { Menu } from 'antd';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Profiles from '../components/Profile/Profiles'
import History from '../components/Profile/History'

function Profile(props) {
    return (
        <div style={{height:"100vh"}}>
            <Navbar></Navbar>
            <div style={{
                display: "flex",
                flexDirection: "row",
                width:"100%",
                height:"100%"
            }}>
                <div>
                    <Menu style={{
                        width: "200px",
                        marginTop: "20px",
                        marginLeft: "15px",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    }}>
                        <Menu.Item key="1">
                            Profile
                        </Menu.Item>
                        <Menu.Item key="2">
                            History
                        </Menu.Item>
                    </Menu>
                </div>
                <div style={{
                    padding:"15px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    width:"100%"
                }}>
                    <History></History>
                </div>
            </div>
        </div>
    )
}

export default Profile
