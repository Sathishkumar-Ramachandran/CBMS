import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//CSS
import '../../../styles/campaignform.css';
import Toolkit from '../../Formfields/toolkit';

import { BiText } from "react-icons/bi";
import { BiParagraph } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const GroupFieldsDefault = [
  {
    label: "First Name",
    tool: "SingleLineText",
    comp: <TextField />,
    icon: <BiText />,
    properties: "",
    onChange: (event, property) =>
      console.log(
        "First Name value changed to:",
        event.target.value,
        property
      ),
  },
  {
    label: "Last Name",
    tool: "SingleLineText",
    comp: <TextField />,
    icon: <BiParagraph />,
    properties: "",
    onChange: (event, property) =>
      console.log("Message value changed to:", event.target.value, property),
  },
];



const AdminGroupFields = () => {
  const [schema, setSchema] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Fetch the schema from MongoDB
     axios.get('http://localhost:3001/api/update')
      .then(response => {
        // Parse the schema and set it in state
        setSchema(JSON.parse(response.data));
        
      })
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = event => {
    // Update the form data when a field is changed
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Send the updated data to MongoDB
    axios.post('/api/update', formData)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  const renderFields = () => {
    // Iterate over the schema and create MUI fields
    if (Object.keys(schema).length === 0) {
      return null;
    }
    return Object.keys(schema?.properties).map(key => {
      const field = schema.properties[key];
      const { type, label } = field;
  
  
    // return Object.keys(schema).map(key => {
    //   const field = schema[key];
    //   const { type, label } = field;
      console.log(schema)
      switch (type) {
        case 'string':
          return (
            <div>         
            <TextField
              key={key}
              name={key}
              label={label}
              value={formData[key] || ''}
              onChange={handleInputChange}
            />
            <DeleteIcon display="inherit" style={{width: '20px', padding: '2px'}} />
            </div>

          );
        case 'button':
          return (
            <Button
              key={key}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {label}
            </Button>
          );
          case 'object':
            return null;
          default:
            return null;
      }
    });
  };

  return (
    <div className='formfielddiv'>  
      <Button>Edit</Button>
      <Button>Save</Button>
      <Toolkit propstest={GroupFieldsDefault}  className='Default' />
      <h4>Groups Fields</h4>
      <form onSubmit={handleSubmit} className='formfield'>
      {renderFields()}
    </form>
    </div>
 
  );
}

export default AdminGroupFields;
