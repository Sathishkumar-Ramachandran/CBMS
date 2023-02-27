import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/Accountsetup.css'
const AccountSetup = ({Children}) => {
    const menuItem=[
        {
          path:"/admin/google/mediasetup",
          name:"Media Setup",
          icon:"",
        },
        {
          path:"/admin/google/adaccountsetup",
          name:"Ad Account Setup",
          icon:"",
        },
        {
            path: "/admin/google/users",
            name:"Users",
            icon:"",
          },
        {
          path:"/admin/google/roles",
          name:"Roles",
          icon:"",
        },
        
        {
          path:  "/admin/google/teams",
          name:"Groups/Teams",
          icon:"",
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