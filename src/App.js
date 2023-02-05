import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";

import Auth from "./Pages/auth.js";
import Dashboard from "./Pages/dashboard";

import "../src/styles/app.css";
import Project from './Components/Project'



function App() {
    
  return (

    <>

      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route  path='/login' element={<Auth />} />
          <Route  path='/project' element={<Project />} />

        </Routes>
      </BrowserRouter>

    </>
 
  );
}

export default App;
