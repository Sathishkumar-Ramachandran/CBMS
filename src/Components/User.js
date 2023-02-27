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
          name:"Users",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Roles",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Fields",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Groups",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Approval Lifecycle",
          para:"",
          icon:''
        },
        {
            path:"",
            name:"Location Avalibility",
            para:"",
            icon:''
          },
         
      ]
  return (
    <>
    <div className='heading'>
      <h2 className='account-gap1'>User Management</h2>
      <p className='paragraph1'></p>
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
