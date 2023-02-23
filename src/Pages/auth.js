import React from "react";


import Login from '../Components/login.js';
import Signup from '../Components/signup.js';
import '../styles/auth.css';

const Auth = () => {
    return(
        
        <div className="row">
            <div className="column">
                <div className="card">  <Login /> </div>
            </div>
            <div className="column">
                <div className="card">  <Signup /> </div>
            </div>
        </div>
        
    )
}

export default Auth;