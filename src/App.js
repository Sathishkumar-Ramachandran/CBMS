import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";

import Auth from "./Pages/auth.js";
import Dashboard from "./Pages/dashboard";

import "../src/styles/app.css";
import Project from './Components/Project'
import Topnav from "./Components/topnav.js";
import Leftnav from "./Components/leftnav.js";
import Header from "./Components/Header.js";
import Profile from './Components/Profile.js';
import Workspace from "./Components/Workspace.js";
import Analytics from "./Components/Analytics.js";
import Admin from "./Components/Admin.js";



function App() {
    
  return (

    <>

      <BrowserRouter >
      <Topnav />
      <Leftnav />
      <Profile />
      <Header />
      
       
      
        
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route  path='/login' element={<Auth />} />
          <Route  path='/project' element={<Project />} />
          <Route path='/workspace' element={<Workspace />} />
          <Route path='/analytics' element={<Analytics/>} />
          <Route path='/admin' element={<Admin />} />
       
        </Routes>
      </BrowserRouter>

    </>
 
  );
}

export default App;
