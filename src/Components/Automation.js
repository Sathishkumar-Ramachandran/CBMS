import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FiAlertTriangle} from "react-icons/fi";
import '../styles/Automation.css';
import Workflow from '../../src/assets/Workflow.png';
import Alert from '../../src/assets/Alert.png';
const Automation = ({Children}) => {
    const adminItem=[
        {
          path:"",
          name:"Workflow Automation",
          para:"",
          icon:<img src={Workflow} alt='for roles'className='Business-icon'/>
        },
        {
          path:"",
          name:"Alert Automation ",
          para:"",
          icon:<img src={Alert} alt='for roles'className='Business-icon'/>
        },
        {
          path:"",
          name:"",
          para:"",
          icon:''
        },

            
      ]
  return (
    <>
    <div className='heading'>
      <h2 className='account-gap4'>Automation</h2>
      <p className='paragraph4'></p>
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
    <div className='line4'></div>
    </div>
    <main>{Children}</main> 
   
    </>
  )
}

export default Automation
