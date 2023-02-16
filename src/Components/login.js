import React, { useState,useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import { DoubleEngine } from "../middleware/interceptor";


import "../styles/login.css";
import { toast } from "react-toastify";

const Login = () => {

    

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
      console.log("Email & Password cannot be empty");
    } else {
        const data={
          mailId:email,
          password:password
        }
     await DoubleEngine.post('api/auth/login',data).then(response=>{
      toast.success("sucessfully logged");
      console.log(response);

     }).catch((err)=>{
      console.log(err);
      toast.error("Username and Password are Incorrect");

     })
      //setSubmitted(true);
    //  navigate("/", { replace: true });
          setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
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
          display: error ? "" : "none",
        }}
      >
        <h1>Please fill all the fields</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1 className="title">LOGIN</h1>
        <div className="underline-title"></div>
      </div>

      <div className="messages"></div>

      <form className="form-input">
        <label className="label-heading">Email</label>
        <input
          onChange={handleEmail}
          className="input-login"
          value={email}
          type="email"
          required
        />
        <div className="text-line"></div>

        <label className="label-heading">Password</label>
        <input
          onChange={handlePassword}
          className="input-login"
          value={password}
          type="password"
          required
        />
        <div className="text-line"></div>

        <a href="" className="forgot-pass">
          Forgot Password?
        </a>

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        <h5 className="login-heading">or login with</h5>

        <div className="login-all">
          {/* <div id="signInDiv"></div> */}
        </div>
        <a href="/signup" className="signup">
          Don't have account yet?
        </a>
      </form>
    </div>
  );
};
export default Login;
