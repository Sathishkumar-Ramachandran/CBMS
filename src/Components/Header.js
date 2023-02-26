import React  from 'react';
import '../styles/Header.css'
import { FaFacebook,FaInstagramSquare,FaTwitterSquare,} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiFillLinkedin , AiFillYoutube} from "react-icons/ai";
import { IoIosArrowDropleft ,IoIosArrowDropright} from "react-icons/io";
import { FcGoogle} from "react-icons/fc";
const Header = () => {

  return (
    <>
    
   
{/* <div className='container'>
    <div className='header'>
<FaGoogle className='icon'/><Link to="">Google</Link>
<FaFacebook className='icon'/><Link to="">Facebook</Link>
<FaInstagramSquare className='icon'/><Link to="">Instagram</Link>
<FaTwitterSquare className='icon'/><Link to="">Twitter</Link>
<FaYoutube className='icon'/><Link to="">Youtube</Link>
<AiFillLinkedin className='icon'/><Link to="">Linkedin</Link>
</div>
</div> */
<nav className='nav-height'>
{/* <button className='left'><IoIosArrowDropleft/></button> */}
<ul className='ul-itemes'>
<IoIosArrowDropleft  className='left'/>
 <li className='item'>
    <FcGoogle className='icon1'/>
    <Link to='/'>Google</Link>
    </li>
    <li className='item1'>
    <FaFacebook className='icon2'/>
    <Link to='/facebook'>Facebook</Link>
    </li>
    <li className='item2'>
    <FaInstagramSquare className='icon3'/>
    <Link to='/'>Instagram</Link>
    </li>
    <li className='item3'>
    <FaTwitterSquare className='icon4'/>
    <Link to='/'> Twitter</Link>
    </li>
    <li className='item3'>
    <AiFillYoutube className='icon5'/>
    <Link to='/'> Youtube</Link>
    </li>
    <li className='item3'>
    <AiFillLinkedin className='icon6'/>
    <Link to='/'>Linkedin</Link>
    </li>
    
    <IoIosArrowDropright  className='right'/>
</ul>
</nav>

}

</>
  )
}

export default Header


