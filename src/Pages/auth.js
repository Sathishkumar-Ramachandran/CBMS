import React from "react";


import Login from '../Components/login.js';
import Signup from '../Components/signup.js';
import '../styles/auth.css';


const Auth = () => {

    return(
        <>
        <div className="auth">
        <h1 className="title-auth">DOUBLE ENGINE</h1>
        
        <div className="row-auth">
            <div className="column-auth">
                <div className="card-auth">  <Login /> </div>
            </div>


        </div>
        </div>
        </>
        
    )
}

export default Auth;