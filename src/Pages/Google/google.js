import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItem } from '../../Components/menuItem.js';

import '../../styles/Google/Google.css'
import CreateAdForm from '../../styles/Google/CreateAd.js';

const GoogleNav = ( {Children} ) => {
    
    return(


      <div className='googlenav'>
          {menuItem.map((item, index) => {
            return(
            <ul>
              {item?.submenu?.map((element, index2) => {
                return(
                <div>
                
                  {element?.options?.map((option, index3) => {
                    return(
                      <div>
                      {console.log(option)}
                      <div className='googlenavtitle'>
                        
                      </div>
                      <div className='googlenavoption'>
                      <NavLink to={option?.path} key={index3} className='' >
                        <div className=''>{option.icon}</div>
                        <div>{option.name}</div>
                        
                      </NavLink>
                        
                      </div>
                      </div>
                    )
                  })}
                
                
                </div>
          )})}
            </ul>
            
         ) })}
          <main>{Children}</main> 
          </div>
        )}



const Google = () => {

    return(
        <>
        
        <GoogleNav />
            
        <div className='googleComp'>
        <CreateAdForm />
        

        </div>
        </>
    )
}


export default Google;