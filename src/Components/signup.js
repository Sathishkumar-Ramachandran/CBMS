import React, {useState} from "react";
import {Router, Routes, Route} from "react-router-dom";
import Dashboard from "./dashboard";

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
                className="success"
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
                className="error"
                style={{
                display: error ? '' : 'none',
                }}>
                <h1>Please fill required fields</h1>
            </div>
            );
        };

    return(

        <div className="form">
            <div>
            <h1>Sign Up</h1>
            </div>
 
      
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
 
        <form>
            {/* Labels and inputs for form data */}
            <label className="label">Username</label>
            <input onChange={handleName} className="input"
            value={name} type="text" required />
    
            <label className="label">Email</label>
            <input onChange={handleEmail} className="input"
            value={email} type="email" required />
    
            <label className="label">Password</label>
            <input onChange={handlePassword} className="input"
            value={password} type="password" required />

            <label className="label">Company Name</label>
            <input onChange={handleCompany} className="input"
            value={company} type="text" required />
    
            <button onClick={handleSubmit} className="btn" type="submit">
            Submit
            </button>
        </form>
        </div>
        
    )
}

export default Signup;