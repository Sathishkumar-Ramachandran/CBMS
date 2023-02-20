import React from "react";
import { NavLink } from "react-router-dom";



const Googleadmin = ({Children}) => {
    const menuItem=[
        {
          path:"/admin/google/accountsetup",
          name:"Account Setup",
          icon:"",
        },
        {
          path:"/admin/google/campaignsetup",
          name:"Campaign Setup",
          icon:"",
        },
        {
          path:"/admin/google/adgroupsetup",
          name:"AdGroups Setup",
          icon:"",
        },
        {
          path:"/admin/google/adsetup",
          name:"Ad Setup",
          icon:"",
        },
        
        {
          path:"/admin/google/othersettings",
          name:"Other Settings",
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

export default Googleadmin;