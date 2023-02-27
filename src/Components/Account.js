import React from 'react';
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

import '../styles/Account.css';

const Admin = ({Children}) => {
    const adminItem=[
        {
          path:"/",
          name:"Account",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Plan & Bilings",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Portal Rebranding",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Day Passes",
          para:"",
          icon:''
        },
       
            //Channels
            
      ]
  return (
    <>
    <div className='heading'>
      <h2 className='account-gap'>Account Settings</h2>
      <p className='paragraph'></p>
      {       
          adminItem.map((item,index)=>(
          
     <div className='admin-model'>
            <Link to={item.path} key={index} className='admin-box' >
              <div className='admin-icon'>{item.icon}</div>
              <div>{item.name}</div>
              <div>{item.para}</div>
            </Link>
            </div>
               
          
          ))
        } 
    </div>
    <div className='line'></div>
    <main>{Children}</main> 

    </>
  )
}

export default Admin
