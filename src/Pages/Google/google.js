import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { menuItem } from '../../Components/menuItem.js';

import '../../styles/Google/Google.css'
import CreateAdForm from '../../styles/Google/CreateAd.js';
import AdsTable from './Ads.js';


const GoogleNav = ( {children, setShowComp} ) => {
    
    const comp = (option) => {
      setShowComp(option.comp)
      alert('clicked');
      
    }
    
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
                     
                      { 
                      <div className='googlenavoption'>
                      <h5
                      onClick={() => {comp(option)} } key={index3} style={{cursor: "pointer"}} >
                        <div className=''>{option.icon}</div>
                        <div>{option.name}</div>
                      </h5>
                      </div>
                    }
                        
                      </div>
                      
                    )
                  })}
                <main>{children}</main>
                
                </div>
          )})}
            </ul>
            
         ) })}
          
          </div>
        )}



const Google = () => {
  const [showComp, setShowComp] = useState();
    return(
        <>
        <div className='google-column'>
          <div className='subnavigation'>
            <GoogleNav setShowComp={setShowComp}  />
          </div>
          <div className='showcomponent'>
            {showComp}
          </div>
        </div>
        </>
    )
}


export default Google;