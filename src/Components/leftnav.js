import React, { useState } from "react";
import '../styles/leftnav.css'
import { FaAlignLeft} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { RiAdminLine} from "react-icons/ri";
import { AiOutlineProject} from "react-icons/ai";
import { FaNetworkWired } from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { VscDashboard } from "react-icons/vsc";

const Leftnav = () => {
    const [active,setActive] = useState(false)
    const activeNav = () =>{
        setActive(!active)
      } 
    return(
        <div className={active ? 'Sidebar': 'Sidebar-mobile'}>

<div className='menu-icon'onClick={activeNav}>

    {!active ? <FaAlignLeft className='menu'/> : <IoIosClose className='Close-icon'/>}
</div>



  <nav>

    <ul className={active ? 'ul-item':'ul-item oicon'}>
        <li>
        <VscDashboard className='icon'/>
        <Link to='/'>Dashboard</Link>
        </li>
        <li>
        <FaNetworkWired className='icon'/>
        <Link to='/facebook'>Workspace</Link>
        </li>
        <li>
        <AiOutlineProject className='icon'/>
        <Link to='/Project'>Project</Link>

        </li>
        <li>
        <TbDeviceDesktopAnalytics className='icon'/>
        <Link to='/'> Analytics</Link>
        </li>
        <li>
        <RiAdminLine className='icon'/>
        <Link to='/'>Admin</Link>
        </li>
    </ul>
  </nav>
  </div>
    )
};

export default Leftnav;