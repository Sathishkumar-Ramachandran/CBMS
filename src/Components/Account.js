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
import Employee from "../assets/Employee.png"

const Admin = ({Children}) => {
    const adminItem=[
        {
          path:"/admin/account/myorganization",
          name:"Account",
          para:"",
          icon:<AccountCircleOutlinedIcon />
        },
        {
          path:"/admin/account/plansandbillings",
          name:"Plans & Bilings",
          para:"",
          icon:<img src={plan} />
        },
        // {
        //   path:"/admin/account/portalsetup",
        //   name:"Portal Rebranding",
        //   para:"",
        //   icon:<img src={portal} />
        // },
        // {
        //   path:"/admin/account/daypasses",
        //   name:"Day Passes",
        //   para:"",
        //   icon:<img src={daypass} />
        // },
        {
          path:"/admin/service/employeeaccess",
          name:"Employee Access",
          para:"",
          icon:<img src={Employee} alt='for approval'className='Approval-icon'/>
        }
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
