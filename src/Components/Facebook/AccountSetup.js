import React from "react";
import FacebookOptions from "./FacebookOptions";


const FacebookAccountSetup = () => {
    AccountOptions = [
        {
            option: "Media Setup",
            comp: "",
            icon: ""
        },
        {
            option: "",
            comp: "",
            icon: ""
        },
        {
            option: "",
            comp: "",
            icon: ""
        },
        {
            option: "",
            comp: "",
            icon: ""
        },
        {
            option: "",
            comp: "",
            icon: ""
        }
    ]
    
    return(
        <FacebookOptions NavBar={<FacebookAccountSetup items={AccountOptions} />}/>
    )
};

export default FacebookAccountSetup;