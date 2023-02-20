import React from "react";
import { NavLink } from "react-router-dom";

const AccountSetup = ({Children}) => {
    const menuItem=[
        {
          path:"/admin/google/accountsetup",
          name:"Account Setup",
          icon:"",
        },
        {
          path:"/admin/google/accountsinfo",
          name:"Account Details",
          icon:"",
        },
        {
            path:"/admin/google/createaccount",
            name:"Create Account",
            icon:"",
          },
        {
          path:"/admin/google/accesscontrol",
          name:"Access Control",
          icon:"",
        },
        {
          path:"/admin/google/roles",
          name:"Roles",
          icon:"",
        },
        
        {
          path:"/admin/google/groups",
          name:"Groups",
          icon:"",
        },
        
      ]
      return (
        <div>
            <div>
            {
              menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                  <div className='icon'>{item.icon}</div>
                  <div className='icon_text'>{item.name}</div>
                </NavLink>
              ))
            }
          </div>
          <main>{Children}</main>
        </div>
      )
}

export default AccountSetup;