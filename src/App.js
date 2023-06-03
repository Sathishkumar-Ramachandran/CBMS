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
import Workspace from "./Pages/Workspace.js";
import Analytics from "./Components/Analytics.js";
import Admin from "./Components/admin/Admin.js";
import Google from "./Pages/Google/google.js";
import GoogleFields from "./Components/Formfields/Google/googleFields.js";
import Dropdown from "./Components/submenu.js";
import Googleadmin from "./Pages/Google/admingoogle.js";
import Mediasetup from "./Pages/Google/Mediasetup.js";

import Campaignform from "./Pages/Google/campaignform.js";
import OrganizationDetails from "./Pages/Account.js";
import AdList from "./Pages/Google/Ads.js";
import AdsTable from "./Pages/Google/Ads.js";
import UsersAdmin from "./Components/admin/User/users.js";
import Users from "./Pages/Google/Users.js";
import Roles from "./Pages/Google/roles.js";
import Groups from "./Pages/Google/groups.js";
import AdGroupForm from "./Pages/Google/adGroupsForm.js";
import CampaignLifecycle from "./Pages/Google/campaignLifecycle.js";

import AdminFields from "./Components/admin/User/fields.js";
import CampaignTable from "./Components/google/CampaignTable.js";



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
          <Route path="/google" element={<Google />} />
          <Route path="/facebook" element={""} />
          <Route path="/instagram" element={""} />
          <Route path="/linkedin" element={""} />
          <Route path="/youtube" element={""} />

          {/* Admin */}
          <Route path="/google/ads" element={<AdList />} />
          {/* Admin Account  Routes*/}
          <Route path="/admin/account/myorganization" element={<OrganizationDetails />} />
          <Route path="/admin/account/plansandbillings" element={""} />
          <Route path="/admin/account/portalsetup" element={""} />
          <Route path="/admin/account/daypasses" element={""} />



          {/* Admin User Routes */}
          <Route path="/admin/user/users" element={<UsersAdmin />} />
          <Route path="/admin/user/roles" element={""} />
          <Route path="/admin/user/fields" element={""} />
          <Route path="/admin/user/groups" element={""} />
          <Route path="/admin/user/approvals" element={""} />
          <Route path="/admin/user/location" element={""} />


          {/* Service Management Routes */}
          <Route path="/admin/service/formfields" element={<AdminFields />} />

          {/* Google Routes */}
          <Route path="/google/ads/createad" element={<AdsTable />} />
          <Route path='/google/campaigns/createcampaign' element={<CampaignTable />} />
          <Route path='/google/campaigns' element={""} />


          {/* Admin Channel Google Routes */}
          <Route path="/admin/channels/google" element={<Googleadmin />} />
          <Route path="/admin/channels/google/accounts/mediasetup" element={<Mediasetup />} />
          <Route path="/admin/channels/google/accounts/adaccountsetup" element={<Googleadmin />} />
          <Route path="/admin/channels/google/accounts/users" element={<Users />} />
          <Route path="/admin/channels/google/accounts/roles" element={<Roles />} /> 
          <Route path="/admin/channels/google/accounts/groups" element={<Groups />} />

          <Route path="/admin/channels/google/campaigns/form" element={<Campaignform />} />
          <Route path="/admin/channels/google/campaign/lifecycle" element={<CampaignLifecycle />} />

          <Route path="/admin/channels/google/adgroups/adgroupssetup" element={<AdGroupForm />} />

         
          <Route path="/admin/channels/google/budget/lifecycle" element={""} />
          <Route path="/admin/channels/google/formfields" element={<GoogleFields />} /> 
          <Route path="/admin/channels/google/others/criteria" element={""} />
          <Route path="/admin/channels/google/others/extensions" element={""} />


          {/* Admin Channel Facebook Routes */}
          <Route path="/admin/channels/facebook" element={""} />
          <Route path="/admin/channels/facebook" element={""} />
          <Route path="/admin/channels/facebook" element={""} />
          <Route path="/admin/channels/facebook" element={""} />
          <Route path="/admin/channels/facebook" element={""} />


          {/* Admin Service Management */}
          <Route path="/admin/service/businesshours" element={""} />
          <Route path="/admin/service/policies" element={""} />
          <Route path="/admin/service/approvals" element={""} />
          <Route path="/admin/service/formfields" element={""} />
          <Route path="/admin/service/businessrules" element={""} />
          <Route path="/admin/service/employeeaccess" element={""} />

          {/* Admin */}
          
          </Route>
        
          <Route  path='/login' element={<Auth />} />
         
        </Routes>
      </BrowserRouter>

    </>
 
  );
}

export default App;
