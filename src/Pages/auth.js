import React from "react";


import Login from '../Components/login.js';
import Signup from '../Components/signup.js';
import '../styles/auth.css';
import bg from "../../src/assets/Login-BG.jpg";

const Auth = () => {
    return(
        <>
        <p>DOUBLE ENGINE</p>
        <div className="row">
            <div className="column">
                <div className="card">  <Login /> </div>
            </div>
            {/* <div className="column">
                <img src={bg} alt="Login Background" className="card" />
            </div>     */}
            <div className="column">
                <div className="card">  <Signup /> </div>
            </div>
        </div>
        </>
        
    )
}

export default Auth;