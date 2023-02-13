import React, {useState} from "react";
import {Router, Routes, Route,Link} from "react-router-dom";
import Dashboard from "../Pages/dashboard.js";
import { FcGoogle } from "react-icons/fc";
import{FaFacebook} from 'react-icons/fa';
import "../styles/signup.css"

const Signup = () => {
    

        // States for registration
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [company, setCompany] = useState('');
        
        // States for checking the errors
        const [submitted, setSubmitted] = useState(false);
        const [error, setError] = useState(false);
        
        // Handling the name change
        const handleName = (e) => {
            setName(e.target.value);
            setSubmitted(false);
        };
        
        // Handling the email change
        const handleEmail = (e) => {
            setEmail(e.target.value);
            setSubmitted(false);
        };
        
        // Handling the password change
        const handlePassword = (e) => {
            setPassword(e.target.value);
            setSubmitted(false);
        };
        const handleCompany = (e) => {
            setName(e.target.value);
            setSubmitted(false);
        };
        
        // Handling the form submission
        const handleSubmit = (e) => {
            e.preventDefault();
            if (name === '' || email === '' || password === '') {
            setError(true);
            } else {
            setSubmitted(true);
            setError(false);
            }
        };
        
        // Showing success message
        const successMessage = () => {
            return (
            <div
                className="signupsuccess"
                style={{
                display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>

            </div>
            );
        };
        
        // Showing error message if error is true
        const errorMessage = () => {
            return (
            <div
                className="signuperror"
                style={{
                display: error ? '' : 'none',
                }}>
                <h1>Please fill required fields</h1>
            </div>
            );
        };

    return(

        <div className="signupform">
            <div>
            <h1 className="signuptitle">SIGNUP</h1>
            <div className="underline-title"></div>
            </div>
 
      
        <div className="signupmessages">
            {errorMessage()}
            {successMessage()}
        </div>
 
        <form className="signupform-input">
            {/* Labels and inputs for form data */}
            <label className="signuplabel">Username</label>
            <input onChange={handleName} className="signupinput"
            value={name} type="text" required />
            <div className="signuptext-line"></div>
    
            <label className="signuplabel">Email</label>
            <input onChange={handleEmail} className="signupinput"
            value={email} type="email" required />
            <div className="signuptext-line"></div>
    
            <label className="signuplabel">Password</label>
            <input onChange={handlePassword} className="signupinput"
            value={password} type="password" required />
            <div className="signuptext-line"></div>

            <label className="signuplabel">Company</label>
            <input onChange={handleCompany} className="signupinput"
            value={company} type="text" required />
            <div className="signuptext-line"></div>
    
            <button onClick={handleSubmit} className="signupbtn" type="submit">
            Submit
            </button>
            <h5 className="signup-heading">or signup with</h5>
             <div className="signup-all">
            <Link to=''className="signup-google-icon"><FcGoogle/></Link>
            <Link to=''className="signup-google-icon-facebook"><FaFacebook/></Link>
            </div>
        </form>
        </div>
        
    )
}

export default Signup;