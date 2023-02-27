import React from "react";
import { NavLink } from "react-router-dom";
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ApprovalOutlinedIcon from '@mui/icons-material/ApprovalOutlined';
const Campaignsetup = ({Children}) => {

    const menuItem=[
        {
          path:"/admin/google/campaignform",
          name:"Campaign Form",
          icon:<FeedOutlinedIcon />,
        },
        {
          path:"Campaign Lifecycle",
          name:"Campaign Lifecycle",
          icon:<ApprovalOutlinedIcon />,
        },
        
      ]

    return(
      <>
      <div className='heading'>
        <h2 className='account-gap2'>CampaignSetup</h2>
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

export default Campaignsetup;