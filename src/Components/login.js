import React, { useState,useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import jwt_decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";



import "../styles/login.css";
import { toast,ToastContainer } from "react-toastify";
import { DoubleEngine } from "../middleware/interceptor.js";
const Login = () => {

      // FB sdk Intilaize
  useEffect(() => {
    window.FB.init({
      appId: "1253461328610568",
      cookie: true,
      xfbml: true,
      version: "v16.0",
    });
  }, []);


  useEffect(() => {
    /*global google*/
    window.google.accounts.id.initialize({
      client_id:
        "720470071516-a1ebq5535or1a9aitm7cr9mf7mrf19cl.apps.googleusercontent.com",
      callback: (data) => handleCallbackResponse(data),
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv1"), {
      theme: "outline",
      size: "large",
      type: "icon",
      shape: "circle",
    });

    //google.accounts.id.prompt();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      console.log("Email & Password cannot be empty");
    } else {
      Userlogin();
      setError(false);
    }
  };

  const Userlogin = async () => {
let payload={
    mailId:email,
    password:password,
}

    await DoubleEngine.post("api/auth/login", payload)
      .then((res) => {
        if(res.data.d=="Invalid_Credentials"){
         toast.error("Invalid Credentials");   
        }
        else{
            if(res.data.token){
                localStorage.setItem("auth-token",res.data.token);
                toast.success("user logged in sucessfully")
                setTimeout(()=>{
                    navigate("/", { replace: true });
                },1000)
                
            }
            else{
                toast.error("Invalid Username and Password")
            }
            
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
                    if (d.data.d == "USER_ALREADY_HAVE_A_COMPANY") {
                        toast.success("User Logged in Sucessfully");
                        setTimeout(()=>{
                                navigate('/',{replace:true})
                        },1000)
                 
                    } else {
                      toast.success("you are A new User");
                    }
                  }
                );
                setEmail(response.email);
               // setName(response.name);
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



  const handleCallbackResponse = (response) => {
    const decodeData = jwt_decode(response.credential);
    console.log(decodeData);
    //setUser(decodeData);
    handleGoogleSignup(decodeData);
  };
  const handleGoogleSignup = async (parmas) => {
    const payload = {
      Email: parmas.email,
    };
    await DoubleEngine.post("api/auth/CheckEmail", payload).then((d) => {
      if (d.data.d == "USER_ALREADY_HAVE_A_COMPANY") {
       toast.success("user logged in sucessfully")
       setTimeout(()=>{
               navigate("/",{replace:true})
       },1000)
      } else {
        toast.success("you are a new User");
      }
    });
    setEmail(parmas.email);
   // setName(parmas.name);
  };

  return (
    <div className="loginform">
    <ToastContainer />
    <div>
      <div>
        <h1 className="logintitle">LOGIN</h1>
        <div className="underline-title"></div>
      </div>

      <div className="messages"></div>

      <form className="loginform-input">
        <label className="loginlabel-heading-email">Email</label>
       
         <input
          onChange={handleEmail}
          className="input-login"
          value={email}
          type="email"
          required
        /> 
         <div className="text-line"></div> 

        <label className="loginlabel-heading">Password</label>
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
        <h5 className="SSO">or Login with</h5>
        
            
            <div className="login-all">
            <div id="signInDiv"></div>
              <Link to="" className="login-google-icon-facebook">
              
                <FaFacebook onClick={loginWithFacebook} />
              </Link>
            </div>
        {/* <a className="signup">
          Don't have account yet?
        </a> */}
      </form>
      </div>
    </div>
  );
};
export default Login;
