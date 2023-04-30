import React from 'react';

const GoogleNav = () => {
    const menuItem=[
        {
          path:"/google/",
          name:"Ads",
          icon:<GoogleIcon />,
        },
        {
          path:"/google/",
          name:"Ad Groups",
          icon:<NewspaperIcon />,
        },
        {
            path: "/google/",
            name:"Campaign",
            icon:<PersonAddAltOutlinedIcon />,
          },
        {
          path:"/google/",
          name:"",
          icon:<ContactEmergencyOutlinedIcon />,
        },
        
        {
          path:  "/google/",
          name:"Groups/Teams",
          icon:<GroupsOutlinedIcon />,
        },
        
      ]
      return (
        <>
        {       
            menuItem.map((item,index)=>(
            
       <div className='admin-model'>
              <NavLink to={item.path} key={index} className='admin-box' >
                <div className='admin-icon'>{item.icon}</div>
                <div>{item.name}</div>
                <div>{item.para}</div>
              </NavLink>
              </div>
             
            ))
          } 
      <div className='line2'></div>
      <main>{Children}</main> 
    </>
      )}



const Google = () => {

    return(
        <>
        <div className='googlenav'>
            <GoogleNav />
        </div>
        <div className='googleComp'>

        </div>
        </>
    )
}