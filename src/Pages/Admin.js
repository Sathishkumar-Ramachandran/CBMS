import React from 'react';
import Account from'../Components/Account';
import ProjectManagement from '../Components/ProjectManagement';
import Automation from '../Components/Automation';
import Channels from '../Components/Channels';
import Service from '../Components/Service';
import User from '../Components/User';
import { ImSearch } from "react-icons/im";
const Admin = () => {
  return (
    <>
     <div className="admingoogle-searchBar">
      <input className="admingoogle-searchQueryInput" name="searchQueryInput" placeholder="Search...."  />
      <button className="admingoogle-searchQuerySubmit" type="submit" name="searchQuerySubmit"><ImSearch/></button>
     </div>
     <Account />
     <User />
     <Channels />
     <Service />
     <Automation />
     <ProjectManagement />
    
    </>
  )
}

export default Admin
