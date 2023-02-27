import React from 'react';
import Account from'./Account';
import ProjectManagement from './ProjectManagement';
import Automation from './Automation';
import Channels from './Channels';
import Service from './Service';
import User from './User';

const Admin = () => {
  return (
    <>
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
