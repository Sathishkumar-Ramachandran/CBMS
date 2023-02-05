import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";


import '../styles/login.css'


const Login = () => {
    

        const navigate = useNavigate();
        
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        
        
        const [submitted, setSubmitted] = useState(false);
        const [error, setError] = useState(false);
        const [visible, setVisible] = useState(true);

        
        const handleEmail = (e) => {
            setEmail(e.target.value);
            setSubmitted(false);
        };
        
        
        const handlePassword = (e) => {
            setPassword(e.target.value);
            setSubmitted(false);
        };
        
        
        
        const handleSubmit = (e) => {
           
            
            if (email === '' || password === '') {
            setError(true);
            console.log('Email & Password cannot be empty');
            
            } else {
            setSubmitted(true);
                navigate('/', {replace: true});
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
                
                console.log(`User {email} Authenticated Successfully`)


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
                <h1>Please fill all the fields</h1>
            </div>
            );
        };

    return(



        <div className="form">
            <div>
            <h1 className="title">LOGIN</h1>
            <div className="underline-title"></div>
            </div>
 
      
        <div className="messages">
           
        </div>
 
        <form className="form-input">
                
            <label className="label">Email</label>
            <input onChange={handleEmail} className="input-login"
            value={email} type="email" required />
            <div className="text-line"></div>
    
            <label className="label">Password</label>
            <input onChange={handlePassword} className="input-login"
            value={password} type="password" required />
            <div className="text-line"></div>

            <a href="" className="forgot-pass">Forgot Password?</a>
    
            <button onClick={handleSubmit} className="btn" type="submit">
            Submit
            </button>

            

            <a href="/signup"  className="signup">
            
                Don't have account yet?
            </a>

        </form>
        </div>
        
    )
}

export default Login;