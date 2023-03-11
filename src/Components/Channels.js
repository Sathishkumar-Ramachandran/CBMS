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

          path:"/admin/google",
          name:"Google",
          para:"",
          icon:<FcGoogle/>
        },
        {
          path:"/admin/facebook",
          name:"Facebook",
          para:"",
          icon:<FaFacebook className='facebook'/>
        },
        {
          path:"/admin/instagram",
          name:"Instagram",
          para:"",
          icon:<FaInstagramSquare className='instagram'/>
        },
        {
          path:"/admin/twitter",
          name:"Twitter",
          para:"",
          icon:<FaTwitterSquare className='twitter'/>
        },
        {
          path:"/admin/linkedin",
          name:"Linkedin",
          para:"",
          icon:<AiFillLinkedin className='linkedin'/>
        },
        {
            path:"/admin/youtube",
            name:"Youtube",
            para:"",
            icon:<AiFillYoutube className='youtube'/>
          },

            //Channels
            
      ]
  return (
    <>
    <div className='heading'>
      <h2 className='account-gap2'>Channels</h2>
      <p className='paragraph2'></p>
      {       
          adminItem.map((item,index)=>(
          
     <div className='admin-model'>
            <Link to={item.path} key={index} className='admin-box' >
              <div className='admin-icon'>{item.icon}</div>
              <div>{item.name}</div>
              <div>{item.para}</div>
            </Link>
            </div>
           
          ))
        } 
    <div className='line2'></div>
    </div>
    <main>{Children}</main> 
   
    </>
  )
}

export default Channels
