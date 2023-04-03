import React, { useState, useEffect } from "react";


import { BiText } from "react-icons/bi";
import { BiParagraph } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { CgRadioChecked } from "react-icons/cg";


const Toolkit = (props) => {

    const [fields, setfields] = useState({});


    tools = [
        {
            Tool: "Single Line Text",
            comp: "",
            icon: <BiText />,
            properties: ""
        },
        {
            Tool: "Paragraph",
            comp: "",
            icon: <BiParagraph />,
            properties: ""
        },
        {
            Tool: "Dropdown",
            comp: "",
            icon: <IoIosArrowDropdown />,
            properties: ""
        },
        {
            Tool: "Radio Button",
            comp: "",
            icon: <CgRadioChecked />,
            properties: ""
        },
        {
            Tool: "",
            comp: "",
            icon: "",
            properties: ""
        },
        
    ]
    const defaultFields = () => {
        props.map(property => {
            return <li key={property}>{property.comp}</li>
        })
    }


    return(
        <>
        <div>
            <div className="toolkit">
                {Toolkit.map((item, index) => (
                    <li key={index}>
                        {item.icon}
                    </li>
                ))
                
                }
            </div>
            <div>
                <ul>{defaultFields}</ul>
            </div>
        </div>
        </>
    )
};

export default Toolkit;