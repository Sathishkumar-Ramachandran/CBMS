import React from 'react';
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import '../styles/Account.css';
import plan from '../../src/assets/plans.png';
import portal from '../../src/assets/portal.png';
import daypass from "../../src/assets/daypass.png";
import roles from "../../src/assets/roles.png";

const Admin = ({Children}) => {
    const adminItem=[
        {
          path:"/admin/account",
          name:"Account",
          para:"",
          icon:<AccountCircleOutlinedIcon />
        },
        {
          path:"/admin/plans",
          name:"Plans & Bilings",
          para:"",
          icon:<img src={plan} />
        },
        {
          path:"/admin/portal",
          name:"Portal Rebranding",
          para:"",
          icon:<img src={portal} />
        },
        {
          path:"/admin/daypasses",
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
              <div>{item.icon}</div>
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
