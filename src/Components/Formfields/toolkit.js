import React from "react";


import { BiText } from "react-icons/bi";
import { BiParagraph } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { CgRadioChecked } from "react-icons/cg";


const Toolkit = () => {
    tools = [
        {
            Tool: "Single Line Text",
            comp: "",
            icon: <BiText />
        },
        {
            Tool: "Paragraph",
            comp: "",
            icon: <BiParagraph />
        },
        {
            Tool: "Dropdown",
            comp: "",
            icon: <IoIosArrowDropdown />
        },
        {
            Tool: "Radio Button",
            comp: "",
            icon: <CgRadioChecked />
        },
        {
            Tool: "",
            comp: "",
            icon: ""
        },
        
    ]



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

            </div>
        </div>
        </>
    )
};

export default Toolkit;