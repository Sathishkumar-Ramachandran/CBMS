import React from "react";
import MediaSetup from "./MediaSetup";
import FacebookOptions from "./FacebookOptions";

const AccountOptions = [
    {
        option: "Media Setup",
        path: "",
        comp: <MediaSetup />,
        icon: ""
    },
    {
        option: "Users",
        path: "",
        comp: "",
        icon: ""
    },
    {
        option: "Roles",
        path: "",
        comp: "",
        icon: ""
    },
    {
        option: "Groups/Teams",
        comp: "",
        icon: ""
    },
];

const FacebookAccountSetup = () => {
    return (
        <div>
           <FacebookOptions items={AccountOptions} />
        </div>
    );
};

export default FacebookAccountSetup;
