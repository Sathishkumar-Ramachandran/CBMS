import React from 'react';
import Account from'./Account';
import ProjectManagement from './ProjectManagement';
import Automation from './Automation';
import Channels from './Channels';
import Service from './Service';
import User from './User';
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
