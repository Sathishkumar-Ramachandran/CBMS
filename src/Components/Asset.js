import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import '../styles/Asset.css';
const Asset = ({Children}) => {
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
          icon:<FaFacebook/>
        },
        {
          path:"",
          name:"Instagram",
          para:"Manage account information and and",
          icon:<FaInstagramSquare/>
        },
        {
          path:"",
          name:"Twitter",
          para:"Manage account information and and",
          icon:<FaTwitterSquare/>
        },
        {
          path:"",
          name:"Linkedin",
          para:"Manage account information and and",
          icon:<AiFillLinkedin/>
        },
        {
            path:"",
            name:"Youtube",
            para:"Manage account information and and",
            icon:<AiFillYoutube/>
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
      <h1 className='account-gap5'>Asset Management</h1>
      <p className='paragraph5'>Discover and manage assets and their related information</p>
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
    <div className='line5'></div>
    </div>
    <main>{Children}</main> 
   
    </>
  )
}

export default Asset
