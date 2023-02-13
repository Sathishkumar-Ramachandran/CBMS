import React from 'react';
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

import '../styles/User.css';

const User = ({Children}) => {
    const adminItem=[
        {
          path:"/",
          name:"Account",
          para:"Manage account information and and",
          icon:<RxDashboard/>
        },
        {
          path:"",
          name:"Project",
          para:"Manage account information and and",
          icon:<AiOutlineFundProjectionScreen/>
        },
        {
          path:"",
          name:"Workspace",
          para:"Manage account information and and",
          icon:<MdWorkspacesOutline/>
        },
        {
          path:"",
          name:"Analytics",
          para:"Manage account information and and",
          icon:<MdOutlineAnalytics/>
        },
        {
          path:"",
          name:"Admin",
          para:"Manage account information and and",
          icon:<RiAdminLine/>
        },
        {
            path:"",
            name:"Admin",
            para:"Manage account information and and",
            icon:<RiAdminLine/>
          },
          {
            path:"",
            name:"Analytics",
            para:"Manage account information and and",
            icon:<MdOutlineAnalytics/>
          },
          {
            path:"",
            name:"Admin",
            para:"Manage account information and and",
            icon:<RiAdminLine/>
          },
          {
              path:"",
              name:"Admin",
              para:"Manage account information and and",
              icon:<RiAdminLine/>
            },
            //Channels
            
      ]
  return (
    <>
    <div className='heading'>
      <h1 className='account-gap1'>User Management</h1>
      <p className='paragraph1'>Manage users, groups and permissions across the service desk</p>
      {       
          adminItem.map((item,index)=>(
          
     <div className='admin-model'>
            <Link to={item.path} key={index} className='admin-box' >
              <div className='admin-icon'>{item.icon}</div>
              <div >{item.name}</div>
              <div>{item.para}</div>
            </Link>
            </div>
          
          ))
        } 
        <div className='line1'></div>
    </div>
    <main>{Children}</main> 

    </>
  )
}

export default User
