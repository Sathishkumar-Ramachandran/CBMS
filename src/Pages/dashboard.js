import React from "react";

import Header from "../Components/Header";
import Leftnav from "../Components/leftnav";
import Main from "../Components/Main";
 import Notification from "../Components/Notification";
import Profile from "../Components/Profile";
import Project from "../Components/Project";
import Task from "../Components/Task";
import Topnav from "../Components/topnav"

const Dashboard = () => {
    return(
        <>
            <Topnav />
            <Leftnav />
             <Header/>
             <Notification /> 
             <Task/>
             <Profile/> 
             <Project/>    
             <Main/>
        </>
    )
}

export default Dashboard;