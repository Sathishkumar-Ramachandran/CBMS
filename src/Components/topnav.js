// import React from 'react'
// import '../styles/topnav.css'
// import { ImSearch } from "react-icons/im";

// import Profile from './Profile';
// const Topnav = () =>{

     

//     return(
//     <>
//    <div className='header'>
//     <div className="wrapper">
//     <div className="searchBar">
//     <input className="searchQueryInput" name="searchQueryInput" placeholder="Search...."  />
//     <button className="searchQuerySubmit" type="submit" name="searchQuerySubmit"><ImSearch/></button>
   
       
    
//     <Profile />
//     </div>
//     </div>
//     </div>
//     <div className='top'></div>
//     </>

//     )
    
//     }
// export default Topnav;



// import React from 'react';
// import '../styles/topnav.css'
// import { ImSearch } from "react-icons/im";
// import Profile from './Profile';
// import { IoIosNotificationsOutline } from "react-icons/io";
// const Topnav = () => {
//   return (
//     <header className="header">
//       <div className="header__left">
//         <div className="header__searchbar">
//           <input type="text" placeholder="Search..." />
//           <button className="header__searchbtn">
//           <ImSearch/>
//           </button>
//         </div>
//       </div>
//       <div className="header__right">
//         <div className="header__icons">
//           <div className="header__icon header__icon--notification">
//             <IoIosNotificationsOutline/>
//             <div className="header__notification-count">3</div>
//           </div>
//           <div className="header__icon header__icon--todo">
//           <IoIosNotificationsOutline/>
//           </div>
//           <div className="header__icon header__icon--profile">
//           <Profile />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Topnav;



import { AiOutlineBell,  AiOutlineSearch,AiOutlineCheckCircle, AiOutlineUser } from 'react-icons/ai';
import '../styles/topnav.css'
import Profile from './Profile';
import praveen from '../Components/assets/praveen.jpg'
const Topnav = () => {
  return (
    <header className="header-alignment">
      <div className="searchbar">
        <input type="text" placeholder="Search" />
        <button>< AiOutlineSearch/></button>
      </div>
      {/* <div className="icons">
        <div className="icon">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification">3</span>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faListUl} />
          <span className="todo">5</span>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div> */}
      <div className="header-icons">
        <div className="header-icon">
          <AiOutlineBell className='image-Round'/>
          <span className="header-icon-count">2</span>
         </div>
         <div className="header-icon">
           <AiOutlineCheckCircle className='image-Round'/>
           <span className="header-icon-count">5</span>
         </div>
         <div className="header-icon">
         <img src={praveen}alt='praveen' className='image-Round'/>
         {/* <Profile/> */}
         </div>
      </div>
    </header>
  );
}
export default Topnav;