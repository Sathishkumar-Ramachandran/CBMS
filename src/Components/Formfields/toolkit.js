import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/formfield.css";
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


const Toolkit = ( {propstest} ) => {
    
  // const propstest = [
  //   {
  //     label: "First Name",
  //     tool: "SingleLineText",
  //     comp: <TextField />,
  //     icon: <BiText />,
  //     properties: "",
  //     onChange: (event, property) =>
  //       console.log(
  //         "First Name value changed to:",
  //         event.target.value,
  //         property
  //       ),
  //   },
  //   {
  //     label: "Last Name",
  //     tool: "Paragraph",
  //     comp: <TextField />,
  //     icon: <BiParagraph />,
  //     properties: "",
  //     onChange: (event, property) =>
  //       console.log("Message value changed to:", event.target.value, property),
  //   },
  // ];

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
      comp: "",
      icon: <BiParagraph />,
      properties: "",
    },
    {
      Tool: "Dropdown",
      comp: <Select />,
      icon: <IoIosArrowDropdown />,
      properties: "",
    },
    {
      Tool: "Radio Button",
      comp: "",
      icon: <CgRadioChecked />,
      properties: "",
    },
  ];

  

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const[props,setProps]=useState(propstest);
  const handleForm = (item, e) => {
    e.preventDefault();
    setSelectedTool(item);
    setShowPopup(true);
  };
  return (
    <>
      <div className="toolkit">
        <div>
       
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
        
        </div>
        {/* <h3>hi</h3> */}
        {showPopup && (
          <Popup
            comp={selectedTool.comp}
            onClose={() => setShowPopup(false)}
            data={selectedTool}
            onSave={(label, properties,options) => {
              setShowPopup(false);
              setProps((prevState) => [
                ...prevState,
                { label, comp: selectedTool.comp, properties,tool:selectedTool.Tool,options:options },
              ]);
            }}
          />
        )}
       <div className="campignfields-h4">
          <h3>Default</h3>
         </div>
        <div className='Formtext '>
            <Form props={props} ></Form>
           
        </div>
       
      </div>
   
    </>
  );
};

const Popup = ({ comp, onClose, onSave,data }) => {
    const [label, setLabel] = useState("");
    const [properties, setProperties] = useState("");
   // const [options, setOptions] = useState([]); // new state for dropdown options
    const [showOptions, setShowOptions] = useState(false);
    const [options, setOptions] = useState([""]);
    const handleSave = () => {
      onSave(label, properties, options);
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
  
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Modal>
    );
  };
  
  function Form({ props }) {
    const handleFieldChange = (event, property) => {
      console.log(`Field ${property.label} value changed to:`, event.target.value);
    };
  
    return (
    <>
        {props.map((property, index) => {
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
                <FormControl fullWidth>
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
          }
           else {
            return null;
          }
        })}
     </>
    );
  }
export default Toolkit;
