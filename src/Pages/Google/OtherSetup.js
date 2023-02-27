import React from 'react';
import { RiAdminLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { FcGoogle} from "react-icons/fc";
import HighlightOutlinedIcon from '@mui/icons-material/HighlightOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';

const OtherSetup = ({Children}) => {
    const adminItem=[
        {
            name: "Criteria",
            icon: <HighlightOutlinedIcon />,
            path: "/admin/google/criteria"
        },
        {
            name: "Extensions",
            icon: <AltRouteOutlinedIcon />,
            path: "/admin/google/extensions"
        },
                    
      ]
  return (
    <>
    <div className='heading'>
      <h2 className='account-gap2'>OtherSetup</h2>
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

export default OtherSetup
