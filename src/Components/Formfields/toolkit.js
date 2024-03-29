import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../../styles/campaignform.css";
import { BiText } from "react-icons/bi";
import { BiParagraph } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";
import { CgRadioChecked } from "react-icons/cg";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material/';
import Radio from '@mui/material/Radio';
import Checkbox from "@mui/material/Checkbox";
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

const Toolkit = ( {props, setProps} ) => {
    


  const tools = [
    {
      Tool: "SingleLineText",
      comp: <TextField />,
      icon: <BiText />,
      properties: "",
      options:[],
    },
    {
      Tool: "Paragraph",
      comp: <TextField />,
      icon: <BiParagraph />,
      properties: "",
    },
    {
      Tool: "Checkbox",
      comp: <Checkbox />,
      icon: <BiParagraph />,
      properties: "",

    },
    {
      Tool: "Dropdown",
      comp: <Select />,
      icon: <IoIosArrowDropdown />,
      properties: "",
      options:[]
    },
    {
      Tool: "Radio Button",
      comp: <Radio />,
      icon: <RadioButtonCheckedOutlinedIcon />,
      properties: "",
      options:[]
    },
    
  ];

 
  

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
 
  const handleForm = (item, e) => {
    e.preventDefault();
    setSelectedTool(item);
    setShowPopup(true);
  };
  return (
    <>
      <div >
        <div >
       
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group" className='button-toolkit'
          >
            {tools.map((item, index) => (
              <Button
                key={index}
                onClick={(e) => {
                  handleForm(item, e);
                }}
              >
                {item.icon}
              </Button>
            ))}
            
          </ButtonGroup>

          <h3 className="Default">
           Default
         </h3>

        </div>
    
        {showPopup && (
          <Popup
            comp={selectedTool.comp}
            onClose={() => setShowPopup(false)}
            data={selectedTool}
            onSave={(label, properties,options) => {
              setShowPopup(false);
              setProps((prevState) => [
                ...prevState,
                { label, comp: selectedTool.comp, properties,tool:selectedTool.Tool,options:options,key:false,value:""},
              ]);
            }}
          />
        )}
     
        <div className="input-formfiled">
     
            <Form props={props} setProps={setProps}></Form>
        </div>
   
      </div>
   
    </>
  );
};

const Popup = ({ comp, onClose, onSave,data }) => {
    const [label, setLabel] = useState("");
    const [properties, setProperties] = useState("");
  //  const [options, setOptions] = useState([]); // new state for dropdown options
    const [showOptions, setShowOptions] = useState(false);
    const [options, setOptions] = useState([""]);
    const handleSave = () => {
      onSave(label, properties, options.filter((option) => option !== ""));
      // setShowPopup(false);
    };
  
    return (
      <Modal open={true} onClose={onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h3>{comp.props.label}</h3>
          <TextField
            label="Label"
            fullWidth
            variant="outlined"
            margin="normal"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="input-formfiled"
          />
          <TextField
            label="Properties"
            fullWidth
            variant="outlined"
            margin="normal"
            value={properties}
            onChange={(e) => setProperties(e.target.value)}
          />
  
          {/* Conditional statement for dropdown options */}
          { data.Tool=== "Dropdown" && (
            <div>
            <Button
              variant="contained"
              onClick={() => setShowOptions(true)}
            >
              Add options
            </Button>
            {showOptions &&
              options.map((option, index) => (
                <div key={index}>
                  <TextField
                    label={`Option ${index + 1}`}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...options];
                      newOptions[index] = e.target.value;
                      setOptions(newOptions);
                    }}
                  
                  />
                  {index === options.length - 1 && (
                    <Button
                      variant="contained"
                      onClick={() => setOptions([...options, ""])}
                    >
                      +
                    </Button>
                  )}
                  
                </div>
              ))}
          </div>

          )}
  
          <Button variant="contained" onClick={handleSave} sx={{margin: 2}}>
            Save
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
         {data.Tool === "Radio Button" && (
          <div>
            <Button variant="contained" onClick={() => setShowOptions(true)}>
              Add options
            </Button>
            {showOptions &&
              options.map((option, index) => (
                <div key={index}>
                  <Radio
                    checked={false}
                    onChange={() => {}}
                    value={option}
                    name="radio-buttons"
                  />
                  <TextField
                    label={`Option ${index + 1}`}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...options];
                      newOptions[index] = e.target.value;
                      setOptions(newOptions);
                    }}
                  />
                  {index === options.length - 1 && (
                    <Button
                      variant="contained"
                      onClick={() => setOptions([...options, ""])}
                    >
                      +
                    </Button>
                  )}
                </div>
              ))}
          </div>
        )}
{/* 
<Button variant="contained" onClick={handleSave} sx={{margin: 2}}>
            Save
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button> */}
        </Box>
      </Modal>
    );
  };
  
  function Form({ props, setProps }) {
    const deleteCustombox=(e,index,key)=>{
      e.preventDefault();
      let temp=[...props]
      temp.splice(index,1);
      setProps(temp);
      console.log(temp);
    }
    const handleFieldChange = (event, property, index) => {
      let temp=[...props.filter(x=>x.key==false)]
      temp[index].value=event.target.value
      // temp.splice(index,1);
      setProps(temp);
      console.log(temp);
      console.log(`Field ${property.label} value changed to:`, event.target.value);
    };
  
    return (
    <>
        {props.filter(x=>x.key==true).map((property, index) => {
          if (property.tool === "SingleLineText") {
            return (
              <div key={index}>
               <TextField
               label={property.label}
               />

              </div>
            );
          } else if (property.tool === "Paragraph") {
            return (
              <div key={index}>
                
              </div>
            );
          } else if (property.tool === "Dropdown" && property?.options?.length>0) {
            const options = property.properties.split(",");
            return (
              <div key={index}>
                <FormControl sx={{width: 250}}>
                  <InputLabel id={`${property.label}-label`}>
                    {property.label}
                  </InputLabel>
                  <Select
                    labelId={`${property.label}-label`}
                    id={`${property.label}-select`}
                    value={""}
                    onChange={(e) => handleFieldChange(e, property)}
                  >
                    {property.options.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            );
          } else if (property.tool === "Radio Button" && property?.options?.length > 0) {
            const options = property.options;
  
            return (
              <div key={index}>
                {options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <Radio
                      checked={property.value === option}
                      onChange={(e) =>
                        handleFieldChange(e, { ...property, value: option }, index)
                      }
                      value={option}
                      name={`radio-buttons-${index}`}
                    />
                    {option}
                  </div>
                ))}
                <Button
                  onClick={(e) => {
                    deleteCustombox(
                      e,
                      props.findIndex((y) => y.label === property.label),
                      property.key
                    );
                  }}
                >
                  Delete
                </Button>
              </div>
            );
          }else {
            return null;
          }
        })}
          
  {props.filter(x=>x.key==false).length>0 &&<h2>Custom</h2>
  }
        
        {props.filter(x=>x.key==false).map((property, index) => {
          if (property.tool === "SingleLineText") {
            return (
              <div key={index}>
               <TextField
               label={property.label}
               />
             <button onClick={(e)=>{deleteCustombox(e,props.findIndex(y=>y.label===property.label),property.key)}}>delete</button>
              </div>
            );
          } else if (property.tool === "Paragraph") {
            return (
              <div key={index}>
                <TextField
                label={property.label}
                />
             <button onClick={(e)=>{deleteCustombox(e,props.findIndex(y=>y.label===property.label),property.key)}}>delete</button>
              </div>
              
            );
          } else if (property.tool === "Dropdown" && property?.options?.length > 0) {
            const options = property.properties.split(",");
            
            return (
              <div key={index}>
                <FormControl sx={{ width: 300 }}   >
                  <InputLabel id={`${property.label}-label`}>
                    {property.label}
                    {/* {selectedValue !== "" ? selectedValue : property.label} // Display selected value or default label
                    {selectedValue !== "" ? selectedValue : property.label} Display selected value or default label */}
                  </InputLabel>
                  <Select
                    labelId={`${property.label}-label`}
                    id={`${property.label}-select`}
                    value={property.value} // Set the selected value
                    onChange={(e) => {
                      handleFieldChange(e, property, index);
                    }}
                  >
                    {property.options.map((option, index) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  <Button
                    onClick={(e) => {
                      deleteCustombox(
                        e,
                        props.findIndex((y) => y.label === property.label),
                        property.key
                      );
                    }}
                  >
                    Delete
                  </Button>
                </FormControl>
              </div>
            );
          }
          
          
           
          
        })}
     </>
    );
  }
export default Toolkit;
