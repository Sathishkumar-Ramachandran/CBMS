import React, { useEffect, useState } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../Pages/dashboard.js";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "../styles/signup.css";
import jwt_decode from "jwt-decode";
import { DoubleEngine } from "../middleware/interceptor.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signup = () => {
  //Handle google signup
  const handleGoogleSignup = (parmas) => {};

  const [user, setUser] = useState();

  const handleCallbackResponse = (response) => {
    const decodeData = jwt_decode(response.credential);
    console.log(decodeData);
    setUser(decodeData);
    handleGoogleSignup(decodeData);

    // document.getElementById("signinDiv").hidden=true;
  };
  useEffect(() => {
    /*global google*/
    window.google.accounts.id.initialize({
      client_id:
        "720470071516-53ka6hv5g1j40prlqq63a8kh26raeqcf.apps.googleusercontent.com",
      callback: (data) => handleCallbackResponse(data),
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
      type: "icon",
      shape: "circle",
    });

    //google.accounts.id.prompt();
  }, []);

  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [otp, setOtp] = useState();
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [verified, setVerified] = useState(false);
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

  const [show, setShow] = useState(false);

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      //setError(true);
    } else {
      const payload = {
        Email: email,
      };
      await DoubleEngine.post("api/auth/sendVerification", payload)
        .then((resp) => {
          if (resp.data.d == "USER_ALREADY_SIGNUP") {
            toast.info("User Already Signup");
          }

          setShow(true);
        })
        .catch(() => {
          toast.error("Something Went wrong");
        });

      if (false) {
        saveSingUpInfo();
      }

      setError(false);
    }
  };

  const saveSingUpInfo = async () => {
    const data = {
      mailId: email,
      password: password,
      companyName: company,
      user_plan: 1,
      isVerified: true,
    };
    await DoubleEngine.post("api/company/register", data)
      .then((response) => {
        toast.success("User Info Saved Sucessfully");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        toast.success("User Info Saving Failed");
      });
  };

  //verifyOTP
  const verifyOTP = async (e) => {
    e.preventDefault();
    const payload = {
      Email: email,
      otp: otp,
    };
    await DoubleEngine.post("api/auth/verifyOTP", payload)
      .then((res) => {
        console.log(res);
        if (res.data.d == "VERIFIED") {
          toast.success("Verified SuccesFully");
          saveSingUpInfo();
        } else {
          toast.error("Enter Correct OTP");
        }
      })
      .catch(() => {
        toast.error("something went Wrong");
      });
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="signupsuccess"
        style={{
          display: submitted ? "" : "none",
        }}
      >
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
          display: error ? "" : "none",
        }}
      >
        <h1>Please fill required fields</h1>
      </div>
    );
  };

  return (
    <div className="signupform">
      <ToastContainer />
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
        {!show && (
          <>
            <label className="signuplabel">Username</label>
            <input
              onChange={handleName}
              className="signupinput"
              value={name}
              type="text"
              required
            />
            <div className="signuptext-line"></div>

            <label className="signuplabel">Email</label>
            <input
              onChange={handleEmail}
              className="signupinput"
              value={email}
              type="email"
              required
            />
            <div className="signuptext-line"></div>

            <label className="signuplabel">Password</label>
            <input
              onChange={handlePassword}
              className="signupinput"
              value={password}
              type="password"
              required
            />
            <div className="signuptext-line"></div>

            <label className="signuplabel">Company</label>
            <input
              onChange={handleCompany}
              className="signupinput"
              value={company}
              type="text"
              required
            />
            <div className="signuptext-line"></div>

            <button onClick={handleSubmit} className="signupbtn" type="submit">
              Submit
            </button>
            <h5 className="signup-heading">or signup with</h5>
            <div className="signup-all">
              <div id="signInDiv"></div>
            </div>
          </>
        )}

        {show && (
          <>
            <div>Enter Your OTP</div>
            <label className="signuplabel">OTP</label>
            <input
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="signupinput"
              value={otp}
              type="text"
              required
            />
            <div className="signuptext-line"></div>

            <button onClick={verifyOTP} className="signupbtn" type="submit">
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Signup;
