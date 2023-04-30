import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItem } from '../../Components/menuItem.js';

import '../../styles/Google/Google.css'

const GoogleNav = ( {props} ) => {
    
    return(


      <div className='googlenav'>
          {menuItem.map((item) => {
            return(
            <ul>
              {item?.submenu?.map((element) => {
                return(
                <div>
                
                  {element?.options?.map((option) => {
                    return(
                      <div>
                      {console.log(option)}
                      <div className='googlenavtitle'>
                        
                      </div>
                      <div className='googlenavoption'>
                        {option.name}
                      </div>
                      </div>
                    )
                  })}
                
                
                </div>
          )})}
            </ul>
            
         ) })}
          </div>
        // <div>
        //   {props?.map((item, index) => {
        //     return(
        //       <div className=''>
        //       <NavLink to={item.path} key={index} className='' >
        //         <div className='admin-icon'>{item.icon}</div>
        //         <div>{item.name}</div>
        //         {/* <div>{item.para}</div> */}
        //       </NavLink>
        //       </div>
        //     )
        //   })}
        // </div>
      )}



const Google = () => {

    return(
        <>
        
        <GoogleNav />
            
        <div className='googleComp'>

        </div>
        </>
    )
}


export default Google;