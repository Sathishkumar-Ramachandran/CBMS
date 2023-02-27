import React from 'react';
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import roles from "../roles.png";
import '../styles/User.css';
import form from "../form.png";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import lifecycle from '../lifecycle.png';
import location from '../locations.png';
const User = ({Children}) => {
    const adminItem=[
        {
          path:"/",
          name:"Users",
          para:"",
          icon:<AccountCircleOutlinedIcon />
        },
        {
          path:"",
          name:"Roles",
          para:"",
          icon:<img src={roles} />
        },
        {
          path:"",
          name:"Fields",
          para:"",
          icon:<img src={form} />
        },
        {
          path:"",
          name:"Groups",
          para:"",
          icon:<GroupsOutlinedIcon />
        },
        {
          path:"",
          name:"Approval Lifecycle",
          para:"",
          icon:<img src={lifecycle} />
        },
        {
            path:"",
            name:"Location Avalibility",
            para:"",
            icon:<img src={location} />
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
