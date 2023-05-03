import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/Accountsetup.css'
import GoogleIcon from '@mui/icons-material/Google';
import CampaignIcon from '@mui/icons-material/Campaign';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const AccountSetup = ({Children}) => {
    const menuItem=[
        {
          path:"/admin/channels/google/accounts/mediasetup",
          name:"Media Setup",
          icon:<GoogleIcon />,
        },
        {
          path:"/admin/channels/google/accounts/adaccountsetup",
          name:"Ad Account Setup",
          icon:<NewspaperIcon />,
        },
        {
            path: "/admin/channels/google/accounts/users",
            name:"Users",
            icon:<PersonAddAltOutlinedIcon />,
          },
        {
          path:"/admin/channels/google/accounts/roles",
          name:"Roles",
          icon:<ContactEmergencyOutlinedIcon />,
        },
        
        {
          path: "/admin/channels/google/accounts/groups",
          name:"Groups/Teams",
          icon:<GroupsOutlinedIcon />,
        },
        
      ]
      return (
        <>
        <div className='heading'>
        <h2 className='accountsetup-account-gap2'>AccountSetup</h2>
        <p className='paragraph2'></p>
        {       
            menuItem.map((item,index)=>(
            
       <div className='admin-model'>
              <NavLink to={item.path} key={index} className='admin-box' >
                <div className='admin-icon'>{item.icon}</div>
                <div>{item.name}</div>
                <div>{item.para}</div>
              </NavLink>
              </div>
             
            ))
          } 
      <div className='line2'></div>
      </div>
      <main>{Children}</main> 
      </>
      )
}

export default AccountSetup;