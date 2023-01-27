import React, {useState} from "react";
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from "react-router-dom";

import Leftnav from "./leftnav";
import "../styles/dashboard.css";

const Topnav = () => {
    const [state, setState] = useState(''); 
    const [isOpen, setOpen] = useState(false);

    return(
        <>
        <p>Sample</p>
        <nav>
            <Hamburger toggled={isOpen} toggle={setOpen} className='Hamburger' />
        <ul>
            
            <li>
                <Link to='' className="" >Sample</Link>
            </li>
            <li>
                <Link to='' className="" />
            </li>
            <li>
                <Link to='' className="" />
            </li>
            <li>
                <Link to='' className="" />
            </li>
        </ul>

        </nav>
        </>
    )
}

export default Topnav;