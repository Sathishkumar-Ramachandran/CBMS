import React from 'react';
import Account from'./Account';
import Asset from './Asset';
import Automation from './Automation';
import Channels from './Channels';
import ITOperation from './ITOperations';
import Service from './Service';
import User from './User';
import Workload from './Workload';
const Admin = () => {
  return (
    <>
    <Account />
    <User />
     <Channels />
     <Service />
     <Automation />
     <Asset />
     <ITOperation />
     <Workload />
    </>
  )
}

export default Admin
