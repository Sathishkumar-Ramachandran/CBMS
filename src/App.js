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
<<<<<<< HEAD
import Account from "./Components/admin/accountsetup.js";
import Campaignform from "./Pages/Google/campaignform.js";
=======
import Campaignform from "./Pages/Google/campaignform.js";


>>>>>>> 8c7f0ce8ade59b8f5127d88bd44a07a225c9c03f

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


          <Route path="/admin/account" element={<Account />} />
        
          <Route path='/admin/google/' element={<Googleadmin />} />
          <Route path='/admin/google/accountsetup/accounts' element={""} />
          <Route path='/admin/google/accountsetup/users' element={""} />
          <Route path='/admin/google/accountsetup/roles' element={""} />
          <Route path='/admin/google/accountsetup/groups' element={""} />
          <Route path='/admin/google/accountsetup/formfields' element={""} />
          <Route path='/admin/google/campaignsetup/campaigns' element={""} />
          <Route path='/admin/google/campaignform' element={<Campaignform />} />
<<<<<<< HEAD
          <Route path='/admin/google/campaignsetup/createcampaigns' element={""} />
          <Route path='/admin/google/campaignsetup/formfields' element={<Campaignform />} />
=======
          <Route path='/admin/google/campaignsetup/formfields' element={""} />
>>>>>>> 8c7f0ce8ade59b8f5127d88bd44a07a225c9c03f
          <Route path='/admin/google/mediasetup' element={<Mediasetup />} />
          
          </Route>
        
          <Route  path='/login' element={<Auth />} />
         
        </Routes>
      </BrowserRouter>

    </>
 
  );
}

export default App;
