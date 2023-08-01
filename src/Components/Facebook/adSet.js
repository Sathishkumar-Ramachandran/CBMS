import React from "react";
import MediaSetup from "./MediaSetup";
import FacebookOptions from "./FacebookOptions";
import UsersFacebook from "./Users";

const AccountOptions = [
    {
        option: "Adset Fields",
        path: "",
        comp: <MediaSetup />,
        icon: ""
    },
    {
        option: "Users",
        path: "",
        comp: <UsersFacebook />,
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

const Adset = () => {
    return (
        <div>
           <FacebookOptions items={AccountOptions} />
        </div>
    );
};

export default Adset;