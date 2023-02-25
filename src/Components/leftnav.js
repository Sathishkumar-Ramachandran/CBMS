
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

const Leftnav = ({Children}) => {


  // const submenu= [
  //   {
  //     path:"/dashboard",
  //     name:"Dashboard",
  //     icon:<RxDashboard/>,
  //   }
  // ]

  const[isOpen , setIsopen] = useState(false);
  const toggle = () =>setIsopen(!isOpen);
  const [isHovered, setIsHovered] = useState(false);
  const [itemmenu, setmenuitem] = useState([]);
  
  const handleMouseEnter = (item) => {
    setIsHovered(true);
    setmenuitem(item.submenu);
    
      
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setmenuitem([]);
  };

  
  
  return (
    <>
    <div className='container'>
      <div style={{width:isOpen ? "300px" : "50px"}}className='sidebar'
      >

        <div className='top-section'>
          <h2 style={{display:isOpen ? "block" :"none"}}className='logo'>Double Engine</h2>
          <div style={{marginLeft:isOpen ? "50px" : "0px"}}className='bars'>
            <HiOutlineMenuAlt2 className='bar'onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              
              <div className='icon' 

              onMouseEnter={() => {handleMouseEnter(item)} }
              onMouseLeave={handleMouseLeave}>{item.icon}</div>
              <div style={{display:isOpen ? "block" :"none"}}className='icon_text'>{item.title}</div>
              
            </NavLink>
          ))
        }
      </div>
      <div className='submenu'>
              {
              itemmenu.map((subitem, subindex) => {
            return(
              <NavLink to={subitem.path} key={subindex}>
                <div>{subitem.icon}</div>
                <div>{subitem.name}</div>
            </NavLink>
            )
        })
      }    
      </div>        
      <main>{Children}</main>
      
    </div>
    
    </>
  )
}

export default Leftnav