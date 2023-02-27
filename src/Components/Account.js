import React from 'react';
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../styles/Account.css';
import plan from '../plans.png';
import portal from '../portal.png';
import daypass from "../daypass.png";
import roles from "../roles.png"

const Admin = ({Children}) => {
    const adminItem=[
        {
          path:"/",
          name:"Account",
          para:"",
          icon:<AccountCircleOutlinedIcon />
        },
        {
          path:"",
          name:"Plans & Bilings",
          para:"",
          icon:<img src={plan} />
        },
        {
          path:"",
          name:"Portal Rebranding",
          para:"",
          icon:<img src={portal} />
        },
        {
          path:"",
          name:"Day Passes",
          para:"",
          icon:<img src={daypass} />
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
