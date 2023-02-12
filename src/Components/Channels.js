import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import '../styles/Channels.css';
const Channels = ({Children}) => {
    const adminItem=[
        {
          path:"/",
          name:"Google",
          para:"Manage account information and and",
          icon:<FcGoogle/>
        },
        {
          path:"",
          name:"Facebook",
          para:"Manage account information and and",
          icon:<FaFacebook className='facebook'/>
        },
        {
          path:"",
          name:"Instagram",
          para:"Manage account information and and",
          icon:<FaInstagramSquare className='instagram'/>
        },
        {
          path:"",
          name:"Twitter",
          para:"Manage account information and and",
          icon:<FaTwitterSquare className='twitter'/>
        },
        {
          path:"",
          name:"Linkedin",
          para:"Manage account information and and",
          icon:<AiFillLinkedin className='linkedin'/>
        },
        {
            path:"",
            name:"Youtube",
            para:"Manage account information and and",
            icon:<AiFillYoutube className='youtube'/>
          },
          {
            path:"",
            name:"Analytics",
            para:"Manage account information and and",
            icon:<AiFillYoutube/>
          },
          {
            path:"",
            name:"Admin",
            para:"Manage account information and and",
            icon:<RiAdminLine/>
          },
          {
              path:"",
              name:"Admin",
              para:"Manage account information and and",
              icon:<RiAdminLine/>
            },
            //Channels
            
      ]
  return (
    <>
    <div className='heading'>
      <h1>  Channels</h1>
      <p>Mange account configurations and customizations for your service desk</p>
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
    
    </div>
    <main>{Children}</main> 
   
    </>
  )
}

export default Channels
