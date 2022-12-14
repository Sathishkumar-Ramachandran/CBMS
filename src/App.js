import React from "react";
import  '../src/styles/signup.css'
import '../src/styles/login.css'

import Signup from "./Pages/signup";
import Login from "./Pages/login";


function App() {
  return (
    <div className="login">
      <Signup className="signup" />
      <Login />
      
    </div>
  );
}

export default App;
