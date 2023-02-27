import React from 'react'
import '../styles/topnav.css'
import { ImSearch } from "react-icons/im";
import { BsListCheck } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import Profile from './Profile';
const Topnav = () =>{

     

    return(
    <>
   <div className='header'>
    <div className="wrapper">
    <div className="searchBar">
    <input className="searchQueryInput" name="searchQueryInput" placeholder="Search...."  />
    <button className="searchQuerySubmit" type="submit" name="searchQuerySubmit"><ImSearch/></button>
   
       
    <button className='todo'><BsListCheck/></button>
    <button className='notifi-icon'><IoIosNotificationsOutline/></button>
    <Profile />
    </div>
    </div>
    </div>
    <div className='top'></div>
    </>

    )
    
    }
export default Topnav;