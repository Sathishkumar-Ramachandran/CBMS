import React from 'react';
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

//ICON ASSETS
import roles from "../../assets/roles.png";
import form from "../../assets/form.png";
import lifecycle from "../../assets/lifecycle.png";
import location from '../../assets/locations.png';

//CSS FILE
import '../../styles/Admin/User.css';
//MUI COMPONENT
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const UserAdmin = ({Children}) => {
    const adminItem=[
        {
          path:"/admin/user/users",
          name:"Users",
          para:"",
          icon:<AccountCircleOutlinedIcon />
        },
        {
          path:"/admin/user/roles",
          name:"Roles",
          para:"",
          icon:<img src={roles} alt='for roles'className='roles-icon'/>
        },
        {
          path:"/admin/user/groups",
          name:"Groups",
          para:"",
          icon:<GroupsOutlinedIcon />
        },
        {
          path:"admin/user/approvals",
          name:"Approval Lifecycle",
          para:"",
          icon:<img src={lifecycle} alt='for approval'/>
        },
        {
            path:"/admin/user/location",
            name:"Location Avalibility",
            para:"",
            icon:<img src={location} alt='for location'/>
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

export default UserAdmin;
