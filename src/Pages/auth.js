
import React, { useState, useEffect } from "react";

import Login from '../Components/login.js';
import Signup from '../Components/signup.js';
import '../styles/auth.css';


const Auth = () => {
    
    return(
        <>
<<<<<<< HEAD
        <h1 className="title-auth">DOUBLE ENGINE</h1>
        
        <div className="row-auth">
=======
        <div className="column-info">
            <h1>DOUBLE ENGINE</h1></div>
        <div className="auth">

        
        
            
                <div className="row-auth">
>>>>>>> b98cbe0 (Signup OTP)
            <div className="column-auth">
                <div className="card-auth">  <Login /> </div>
            </div>
            
<<<<<<< HEAD
            <div className="column-auth">
                <div className="card-auth">  <Signup /> </div>
            </div>
=======
            {/* <div className="column-auth">
                <div className="card-auth">  <Signup /> </div>
            </div> */}
>>>>>>> b98cbe0 (Signup OTP)
        </div>
        </div>

        
       

        </>
        
    )
}

export default Auth;