import React, { useState } from "react";

const Toolbox = () => {


    toolboxItems = [
        {
            tool1: "Single Line",
            icon: "",
            props: "",
            component: ""
        },
        {
            tool2: "Paragragh",
            icon: "",
            props: "",
            component: ""
        },
        {
            tool3: "Radio Button",
            icon: "",
            props: "",
            component: ""
        },
        {
            tool4: "Dropdown",
            icon: "",
            props: "",
            component: ""
        },
        {
            tool1: "Multiple Selection",
            icon: "",
            props: "" ,
            component: ""
        },
        {
            tool1: "",
            icon: "",
            props: "" ,
            component: ""

        },
        {
            tool1: "",
            icon: "",
            props: "",
            component: ""
        }
    ]
    
    const [tools, setTools] = useState([]);

    const handletool = () => {
        
    };

    return(
        <>
       
        <div>
        {
          toolboxItems.map((item,index)=>(
            
              <div className='leftnav-icon' >
                <li onClick={handletool} key={index}>
                    {item.icon}
                </li>
              </div>
              
              
          ))
        }
      </div>
      </>
    )
}

export default Toolbox;