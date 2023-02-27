import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import '../styles/Service.css';
const Service = ({Children}) => {
    const adminItem=[
        {
          path:"/",
          name:"Business Hours",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"SLA & OLA Policies",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Approval Policies",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Form Fields",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Business Rules",
          para:"",
          icon:''
        },
        {
            path:"",
            name:"Employee Access",
            para:"",
            icon:''
          },
          
      ]
  return (
    <>
    <div className='heading'>
      <h2 className='account-gap3'>Service Management</h2>
      <p className='paragraph3'></p>
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
    <div className='line3'></div>
    </div>
    <main>{Children}</main> 
   
    </>
  )
}

export default Service
