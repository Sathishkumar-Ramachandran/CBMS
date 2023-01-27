import React from "react";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Dashboard from "./Pages/dashboard";

import "../src/styles/app.css";



function App() {

  

  return (
    <>
      <div className="row">
      <div className="column">
      <div className="card">  <Login /> </div>
      </div>
      <div className="column">
      <div className="card">  <Signup /> </div>
      </div>
    </div>
    </>
  );
}

export default App;
