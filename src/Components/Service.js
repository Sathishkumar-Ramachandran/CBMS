import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaBusinessTime} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import '../styles/Service.css';
import Business from '../../src/assets/Business.png';
import Approval from '../../src/assets/Approval.png';
import Formfields from '../../src/assets/Formfileds.jpg';
import Employee from '../../src/assets/Employee.png';
import Businessrules from '../../src/assets/Businessrules.png';
const Service = ({Children}) => {
    const adminItem=[
        {
          path:"/admin/service/businesshours",
          name:"Business Hours",
          para:"",
          icon:<img src={Business} alt='for roles'className='Business-icon'/>
        },
        
        // {
        //   path:"/admin/service/approvals",
        //   name:"Approval Policies",
        //   para:"",
        //   icon:<img src={Approval} alt='for approval'className='Approval-icon'/>
        // },
        {
          path:"/admin/service/formfields",
          name:"Form Fields",
          para:"",
          icon:<img src={Formfields} alt='for formfileds'className='Approval-icon'/>
        },
        // {
        //   path:"/admin/service/businessrules",
        //   name:"Business Rules",
        //   para:"",
        //   icon:<img src={Businessrules} alt='for approval'className='Approval-icon'/>
        // },
        
          
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
