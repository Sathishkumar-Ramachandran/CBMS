import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";

const BudgetForm = ({Children}) => {
    const adminItem=[
        {
            name: "Budget Form",
            icon: "",
            path: "/admin/google/budgetform"
        },
        {
            name: "Budget Lifecycle",
            icon: "",
            path: "/admin/google/budgetlifecycle"

        },
        
      ]
  return (
    <>
    <div className='heading'>
      <h2 className='account-gap2'>Budget Setup</h2>
      <p className='paragraph2'></p>
      {       
          adminItem.map((item,index)=>(
          
     <div className='admin-model'>
            <NavLink to={item.path} key={index} className='admin-box' >
              <div className='admin-icon'>{item.icon}</div>
              <div>{item.name}</div>
              <div>{item.para}</div>
            </NavLink>
            </div>
           
          ))
        } 
    <div className='line2'></div>
    </div>
    <main>{Children}</main> 
   
    </>
  )
}

export default BudgetForm
