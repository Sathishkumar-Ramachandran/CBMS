import React from "react";

const Campaignsetup = ({Children}) => {

    const menuItem=[
        {
          path:"/admin/google/campaignsetup/campaigns",
          name:"Campaigns",
          icon:"",
        },
        {
          path:"/admin/google/campaignsetup/createcampaigns",
          name:"Create Campaigns",
          icon:"",
        },
        {
          path:"/admin/google/campaignsetup/formfields",
          name:"Form Fields",
          icon:"",
        },
        
      ]

    return(
        <div>

          <h1>Campaignsetup</h1>
            <div>
            {
              menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                  <div className='icon'>{item.icon}</div>
                  <div className='icon_text'>{item.name}</div>
                </NavLink>
              ))
            }
          </div>
          <main>{Children}</main>
        </div>
    )
}

export default Campaignsetup;