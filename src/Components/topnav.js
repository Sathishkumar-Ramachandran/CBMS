import React from 'react'
import '../styles/topnav.css'
import { ImSearch } from "react-icons/im";

import Profile from './Profile';
const Topnav = () =>{

     

    return(
    <>
   <div className='header'>
    <div className="wrapper">
    <div className="searchBar">
    <input className="searchQueryInput" name="searchQueryInput" placeholder="Search...."  />
    <button className="searchQuerySubmit" type="submit" name="searchQuerySubmit"><ImSearch/></button>
   
       
    
    <Profile />
    </div>
    </div>
    </div>
    <div className='top'></div>
    </>

    )
    
    }
export default Topnav;