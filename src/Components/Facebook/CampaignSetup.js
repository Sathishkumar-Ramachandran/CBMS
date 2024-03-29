import React from "react";
import MediaSetup from "./MediaSetup";
import FacebookOptions from "./FacebookOptions";
import UsersFacebook from "./Users";

const AccountOptions = [
    {
        option: "Campaign Fields",
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

const FacebookCampaignSetup = () => {
    return (
        <div>
           <FacebookOptions items={AccountOptions} />
        </div>
    );
};

export default FacebookCampaignSetup;