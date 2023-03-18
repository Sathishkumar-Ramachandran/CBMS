import React, { useState } from "react";
import { Link } from "react-router-dom";

const Submenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);


    const showSubnav = () => setSubnav(!Subnav);

    return(
        <>
        
        <Link to={item.path} onMouseEnter={item.subNav && showSubnav}>
        <div>
            {item.icon}
        </div>

        </Link>

        </>
    )
} 