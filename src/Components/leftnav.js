
import React, {  useState } from 'react'
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import '../styles/leftnav.css';

const Leftnav = ({Children}) => {
  const[isOpen , setIsopen] = useState(false);
  const toggle = () =>setIsopen(!isOpen);
  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      icon:<RxDashboard/>
    },
    {
      path:"/project",
      name:"Project",
      icon:<AiOutlineFundProjectionScreen/>
    },
    {
      path:"/workspace",
      name:"Workspace",
      icon:<MdWorkspacesOutline/>
    },
    {
      path:"/analytics",
      name:"Analytics",
      icon:<MdOutlineAnalytics/>
    },
    {
      path:"/admin",
      name:"Admin",
      icon:<RiAdminLine/>
    },
  ]
  return (
    <div className='container'>
      <div style={{width:isOpen ? "300px" : "50px"}}className='sidebar'>
        <div className='top-section'>
          <h2 style={{display:isOpen ? "block" :"none"}}className='logo'>Double Engine</h2>
          <div style={{marginLeft:isOpen ? "50px" : "0px"}}className='bars'>
            <HiOutlineMenuAlt2 className='bar'onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{display:isOpen ? "block" :"none"}}className='icon_text'>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{Children}</main>
    </div>
  )
}

export default Leftnav