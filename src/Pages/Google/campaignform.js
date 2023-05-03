import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Campaignform = () => {
  const [schema, setSchema] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Fetch the schema from MongoDB
     axios.get('http://localhost:3001/')
      .then(response => {
        // Parse the schema and set it in state
        setSchema(JSON?.parse(response.data));
        
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
    return Object.keys(schema).map(key => {
      const field = schema[key];
      const { type, label } = field;
      console.log(schema)
      switch (type) {
        case 'text':
          return (
            <TextField
              key={key}
              name={key}
              label={label}
              value={formData[key] || ''}
              onChange={handleInputChange}
            />
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
        default:
          return null;
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderFields()}
    </form>
  );
}

export default Campaignform;
