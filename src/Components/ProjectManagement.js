import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import '../styles/ProjectManagement.css';
const ProjectManagement = ({Children}) => {
    const adminItem=[
        {
          path:"/",
          name:"Project Collaboration",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Project Lifecycle",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"JIRA",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"Trello",
          para:"",
          icon:''
        },
        {
          path:"",
          name:"DevOps",
          para:"",
          icon:''
        },
        
      ]
  return (
    <>
    <div className='heading'>
      <h2 className='account-gap5'>Project Management</h2>
      <p className='paragraph5'></p>
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

export default ProjectManagement
