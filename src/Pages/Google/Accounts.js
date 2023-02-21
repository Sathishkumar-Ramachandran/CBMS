import React from "react";
import { NavLink } from "react-router-dom";



const Accounts = ({Children}) => {
    const menuItem=[
        {
          path:"/admin/google/accountsetup/accounts",
          name:"Accounts",
          icon:"",
        },
        {
          path:"/admin/google/accountsetup/users",
          name:"Users",
          icon:"",
        },
        {
          path:"/admin/google/accountsetup/role",
          name:"Roles",
          icon:"",
        },
        {
            path:"/admin/google/accountsetup/groups",
            name:"Groups",
            icon:"",
          },
        {
          path:"/admin/google/accountsetup/formfields",
          name:"Form Fields",
          icon:"",
        },
        
      ]
      return (
        <div>

          <h1>Account Setup</h1>
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

export default Accounts;