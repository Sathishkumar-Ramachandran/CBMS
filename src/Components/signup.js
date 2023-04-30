import React, { useEffect, useState } from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../Pages/dashboard.js";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "../styles/signup.css";
import "../styles/login.css";
import jwt_decode from "jwt-decode";
import { DoubleEngine } from "../middleware/interceptor.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "@mui/material";

const Signup = () => {
  const [googleSignIn, setGoogleSignIn] = useState(false);
  const [user, setUser] = useState();
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

  const [showOTP, setShowOTP] = useState(false);

  // FB sdk Intilaize
  useEffect(() => {
    window.FB.init({
      appId: "1253461328610568",
      cookie: true,
      xfbml: true,
      version: "v16.0",
    });
  }, []);
  // handle FB Login
  const loginWithFacebook = () => {
    window.FB.login(
      (response) => {
        console.log(response);
        if (response.authResponse) {
          console.log("User is logged in with Facebook.");
          window.FB.api(
            "/me",
            { fields: "id,name,email,picture" },
            async (response) => {
              if (response.error) {
                console.error(response.error);
              } else {
                console.log(response);
                const payload = {
                  Email: response.email,
                };
                await DoubleEngine.post("api/auth/CheckEmail", payload).then(
                  (d) => {
                    if (d.data.d != "USER_ALREADY_HAVE_A_COMPANY") {
                      setGoogleSignIn(true);
                    } else {
                      toast.success(
                        "You have a company you can login with your Google Account"
                      );
                    }
                  }
                );
                setEmail(response.email);
                setName(response.name);
                // setGoogleSignIn(true);
              }
            }
          );
          // Here you can handle the Facebook login response
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  useEffect(() => {
    /*global google*/
    window.google.accounts.id.initialize({
      client_id:
        "720470071516-a1ebq5535or1a9aitm7cr9mf7mrf19cl.apps.googleusercontent.com",
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

  const handleCallbackResponse = (response) => {
    const decodeData = jwt_decode(response.credential);
    console.log(decodeData);
    setUser(decodeData);
    handleGoogleSignup(decodeData);
  };

  //Handle google signup
  const handleGoogleSignup = async (parmas) => {
    const payload = {
      Email: parmas.email,
    };
    await DoubleEngine.post("api/auth/CheckEmail", payload).then((d) => {
      if (d.data.d != "USER_ALREADY_HAVE_A_COMPANY") {
        setGoogleSignIn(true);
        //saveSingUpInfo();
      } else {
        toast.success(
          "You have a company you can login with your Google Account"
        );
      }
    });
    setEmail(parmas.email);
    setName(parmas.name);
  };

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
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("seconds")) || 60
  );
  const [showResendButton, setShowResendButton] = useState(true);
  useEffect(() => {
    setSeconds(60);
    if (show) {
      const interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds == 0 || seconds < 0) {
            localStorage.removeItem("seconds");
            return 0;
          } else {
            const newSeconds = seconds - 1;
            localStorage.setItem("seconds", newSeconds.toString());
            return newSeconds;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [show]);
  useEffect(() => {
    if (seconds == 0) {
      setShowResendButton(false);
    }
  }, [seconds]);

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
      setShowOTP(true);
      await DoubleEngine.post("api/auth/sendVerification", payload)
        .then((resp) => {
          if (resp.data.d == "USER_ALREADY_SIGNUP") {
            toast.info("User Already Signup");
          } else {
            setShow(true);
          }
        })
        .catch(() => {
          toast.error("Something Went wrong");
        });
      setError(false);
    }
  };

  const saveSingUpInfo = (e) => {
    e.preventDefault();
    SavingtoDb();
  };

  const SavingtoDb = async () => {
    const data = {
      name: name,
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
        toast.error("User Info Saving Failed");
        setShow(false);
        setGoogleSignIn(false);
        setEmail("")
        setUser("")
        setCompany("")
        setPassword("");
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
          SavingtoDb();
        } else if (res.data.d == "OTP_EXPIRED") {
          toast.info("OTP Expired Click the Resend Button");
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
        {!show && !googleSignIn && (
          <>
            <label className="signuplabel">Username</label>
            <input
              onChange={handleName}
              className="signupinput"
              value={name}
              type="text"
              required
              size={50}
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
            <div>         
            {
              showOTP &&
              <div className="OTP"> 
                <label className="OTP-label"> OTP </label>
                <input className="OTP-input" type="text" />
                <button className="OTP-button">Verify OTP</button>
              </div>
            }
            </div>
 
            <h5 className="signup-heading">or Signup with</h5>
            <div className="signup-all">
              
           
            <div className="login-all">
            <div id="signInDiv"> </div>
              <Link to="" className="login-google-icon-facebook">
                <FaFacebook onClick={loginWithFacebook} />
              </Link>
            </div>
            </div>
          </>
        )}

        {googleSignIn && (
          <>
            <label className="signuplabel">Company Name</label>
            <input
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              className="signupinput"
              value={company}
              type="text"
              required
            />
            <div className="signuptext-line"></div>

            <label className="signuplabel">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="signupinput"
              value={password}
              type="text"
              required
            />
            <div className="signuptext-line"></div>
            <button
              onClick={saveSingUpInfo}
              className="signupbtn"
              type="submit"
            >
              Submit
            </button>
            
          </>
        )}

        {show && !googleSignIn && (
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
            <div>
              {seconds > 0
                ? `00:${seconds < 10 ? `0${seconds}` : seconds}`
                : "00:00"}
            </div>
            <button
              disabled={showResendButton}
              onClick={(e) => {
                handleSubmit(e);
                setSeconds(parseInt(localStorage.getItem("seconds")) || 60);
                setShow(true);
                setShowResendButton(true);
              }}
            >
              Resend
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Signup;
