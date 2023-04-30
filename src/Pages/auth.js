import React from "react";


import Login from '../Components/login.js';
import Signup from '../Components/signup.js';
import '../styles/auth.css';


const Auth = () => {

    return(
        <>
        <div>
        <h1 className="title-auth">DOUBLE ENGINE</h1>
        
        <div className="row-auth">
            <div className="column-auth">
                <div className="card-auth">  <Login /> </div>
            </div>
{/*             
            <div className="column">
                <div className="card">  <Signup /> </div>
            </div> */}


        </div>
        </div>
        </>
        
    )
}

export default Auth;