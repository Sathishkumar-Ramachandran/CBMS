import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./Pages/auth.js";
import Dashboard from "./Pages/dashboard";

import "../src/styles/app.css";



function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/login' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
