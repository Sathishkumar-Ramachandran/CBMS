import React, { useState, useEffect} from "react";
import axios from "axios";
import "../../styles/Formfields/formfield.css"
import { BiText } from "react-icons/bi";
import { BiParagraph } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { CgRadioChecked } from "react-icons/cg";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';



const Toolkit = (props) => {

   
   

   

    const tools = [
        {
            Tool: "Single Line Text",
            comp: <TextField />,
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

    
    return(
        <>
        <div>
            <div className="toolkit">

            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                {tools.map((item, index) => (
                    <Button key={index} >
                        {item.icon}
                           
                    </Button>
                        
                ))
                
                
                }
            </ButtonGroup>
            </div>
            <div>
            
            </div>
        </div>
        </>
    )
};

export default Toolkit;