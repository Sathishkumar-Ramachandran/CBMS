
import React, {  useState } from 'react'
import {RxDashboard } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdWorkspacesOutline, MdOutlineAnalytics } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import '../styles/leftnav.css';

import { menuItem } from './menuItem';
import Dropdown from './submenu';

const Leftnav = ({Children, submenu}) => {
  const[isOpen , setIsopen] = useState(false);
  const toggle = () =>setIsopen(!isOpen);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <>
    <div className='container'>
      <div style={{width:isOpen ? "300px" : "50px"}}className='sidebar'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>

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
              <div style={{display:isOpen ? "block" :"none"}}className='icon_text'>{item.title}</div>
               

              
            </NavLink>
          ))
        }
      </div>
      
      <main>{Children}</main>
      {
              isHovered && <Dropdown style={{display:"contents" }} />
          }
    </div>
    <Dropdown />
    </>
  )
}

export default Leftnav