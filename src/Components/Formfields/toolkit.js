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


<<<<<<< HEAD
const Toolkit = (props) => {
    tools = [
        {
            Tool: "Single Line Text",
            comp: "",
=======

const Toolkit = (props) => {

   
   

   

    const tools = [
        {
            Tool: "Single Line Text",
            comp: <TextField />,
>>>>>>> 8c7f0ce8ade59b8f5127d88bd44a07a225c9c03f
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
<<<<<<< HEAD
    const defaultFields = () => {
        props.map(property => {
            return <li key={property}>{property.comp}</li>
        })
    }


=======

    
>>>>>>> 8c7f0ce8ade59b8f5127d88bd44a07a225c9c03f
    return(
        <>
        <div>
            <div className="toolkit">
<<<<<<< HEAD
                {tools.map((item, index) => (
                    <li key={index}>
=======

            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                {tools.map((item, index) => (
                    <Button key={index} >
>>>>>>> 8c7f0ce8ade59b8f5127d88bd44a07a225c9c03f
                        {item.icon}
                           
                    </Button>
                        
                ))
                
                
                }
            </ButtonGroup>
            </div>
            <div>
<<<<<<< HEAD
                <ul>{defaultFields}</ul>
=======
            
>>>>>>> 8c7f0ce8ade59b8f5127d88bd44a07a225c9c03f
            </div>
        </div>
        </>
    )
};

export default Toolkit;