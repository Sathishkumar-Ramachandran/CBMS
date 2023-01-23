import React from "react";
import { redirect } from "react-router-dom";
import Dashboard from "../Components/dashboard";


const PrivateRoute = () => {
  /*  const loaduser = async () => {
        if () {
            const fetchUser = await fetchUser();
            if (fetchUser) {
                redirectNow();
            }
        } 
    }*/
    return(
        <Dashboard />
    )
   
}

export default PrivateRoute;