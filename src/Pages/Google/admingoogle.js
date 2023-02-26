import React from "react";
import { Link } from "react-router-dom";

import "../../"

const Googleadmin = () => {
    
    const googlepanel = [
        {
            title: "Account Setup",
            submenu: [
                {
                    name: "Media Setup",
                    icon: "",
                    path: "/admin/google/mediasetup"
                },
                {
                    name: "Ad Account Setup",
                    icon: "",
                    path: "/admin/google/adaccountsetup"
                },
                {
                    name: "Users",
                    icon: "",
                    path: "/admin/google/users"
                },
                {
                    name: "Roles",
                    icon: "",
                    path: "/admin/google/roles"
                },
                {
                    name: "Groups/Teams",
                    icon: "",
                    path: "/admin/google/teams"
                },
                {
                    name: "Forms",
                    icon: "",
                    path: "/admin/google/forms"
                }
            ]
        },
        {
            title: "Campaign Setup",
            submenu: [
                {
                    name: "Campaign Form",
                    icon: "",
                    path: "/admin/google/campaignform"
                },
                {
                    name: "Campaign Lifecycle",
                    icon: "",
                    path: "/admin/google/campaignlifecycle"
                },
               
            ]
        },
        {
            title: "Ad Group Setup",
            submenu: [
                {
                    name: "Ad Groups Form",
                    icon: "",
                    path: "/admin/google/adgroupsform"
                },
                
               
            ]
        },
        {
            title: "Budget Setup",
            submenu: [
                {
                    name: "Budget Form",
                    icon: "",
                    path: "/admin/google/budgetform"
                },
                {
                    name: "Budget Lifecycle",
                    icon: "",
                    path: "/admin/google/budgetlifecycle"

                },
               
            ]
        },
        {
            title: "Other Setup",
            submenu: [
                {
                    name: "Criteria",
                    icon: "",
                    path: "/admin/google/criteria"
                },
                {
                    name: "Extensions",
                    icon: "",
                    path: "/admin/google/extensions"
                },
               
            ]
        },
    ]
    
    return(
        <>
        {
            googlepanel.map((item, index) => (
                <>
               
                <Link to={item.submenu.path} key={index} >
                    <div>{item.title}</div>
                    <div>{item.submenu.icon}</div>
                    <div>{item.submenu.name}</div>
                </Link>
                </>
        ))}

        </>
    )
}

export default Googleadmin;