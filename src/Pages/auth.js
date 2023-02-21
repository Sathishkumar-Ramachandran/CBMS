import React from "react";


import Login from '../Components/Login';
import Signup from '../Components/signup';
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