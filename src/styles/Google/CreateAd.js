import React, { useState } from 'react';
import axios from 'axios';

function CreateAdForm() {
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the Flask API endpoint
    axios.post('/api/google/ads/createad', {
      headline: headline,
      description: description
    })
    .then(response => {
      setSuccessMessage(`Ad created with ID ${response.data}`);
      setErrorMessage('');
    })
    .catch(error => {
      setSuccessMessage('');
      setErrorMessage(`Failed to create ad: ${error.response.data}`);
    });
  };

  return (
    <div>
      <h1>Create Ad</h1>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Headline:</label>
          <input type="text" value={headline} onChange={(event) => setHeadline(event.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
        <button type="submit">Create Ad</button>
      </form>
    </div>
  );
}

export default CreateAdForm;
