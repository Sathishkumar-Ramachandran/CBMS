import React from "react";
import { BrowserRouter, Route,  Routes,Outlet } from "react-router-dom";

import Auth from "./Pages/auth.js";
import Dashboard from "./Pages/dashboard";

import "../src/styles/app.css";
import Projects from './Pages/Project'
import Topnav from "./Components/topnav.js";
import Leftnav from "./Components/leftnav.js";
import Header from "./Components/Header.js";
import Profile from './Components/Profile.js';
import Workspace from "./Components/Workspace.js";
import Analytics from "./Components/Analytics.js";
import Admin from "./Components/Admin.js";

import Dropdown from "./Components/submenu.js";
import Googleadmin from "./Pages/Google/admingoogle.js";
import Mediasetup from "./Pages/Google/Mediasetup.js";
import Campaignform from "./Pages/Google/campaignform.js";



function App() {
  function WithNavs() {
    return (
      <>
        <Topnav />
        <Leftnav />
      
        <Outlet />
      </>
    );
  }
  
  return (

    <>

      <BrowserRouter >
     
       
      
        
        <Routes>
        <Route element={<WithNavs />}>
        <Route exact path='/' element={<Dashboard />} />
        <Route  path='/projects' element={<Projects />} />
          <Route path='/workspace' element={<Workspace />} />
          <Route path='/analytics' element={<Analytics/>} />
          <Route path='/admin' element={<Admin />} />
        
          <Route path='/admin/google/' element={<Googleadmin />} />
          <Route path='/admin/google/accountsetup/accounts' element={""} />
          <Route path='/admin/google/accountsetup/users' element={""} />
          <Route path='/admin/google/accountsetup/roles' element={""} />
          <Route path='/admin/google/accountsetup/groups' element={""} />
          <Route path='/admin/google/accountsetup/formfields' element={""} />
          <Route path='/admin/google/campaignsetup/campaigns' element={""} />
          <Route path='/admin/google/campaignform' element={<Campaignform />} />
          <Route path='/admin/google/campaignsetup/formfields' element={""} />
          <Route path='/admin/google/mediasetup' element={<Mediasetup />} />
          
          </Route>
        
          <Route  path='/login' element={<Auth />} />
         
        </Routes>
      </BrowserRouter>

    </>
 
  );
}

export default App;
