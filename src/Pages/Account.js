import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import '../styles/Admin/Account/OrganizationDetails.css';
function OrganizationDetails() {
  const [orgId, setOrgId] = useState('');
  const [orgDetails, setOrgDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/organizations/${orgId}`);
    const data = await response.json();
    setOrgDetails(data);
  };

  return (
    <div className='card'>
      <Typography variant="h4" gutterBottom className='card-title'>
        My Organization
      </Typography>
      <form onSubmit={handleSubmit} className='id_form'>
        <TextField
          label="Organization ID"
          value={orgId}
          onChange={(e) => setOrgId(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" className='submit'>
          Retrieve Details
        </Button>
      </form>
      {orgDetails && (
        <div>
          <Typography variant="h5" gutterBottom>
            {orgDetails.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Admin Email: {orgDetails.admin_email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Selected Plan: {orgDetails.selected_plan}
          </Typography>
          <Typography variant="body1" gutterBottom>
            License Activated Date: {orgDetails.license_activated_date}
          </Typography>
          <Typography variant="body1" gutterBottom>
            License Expiring On: {orgDetails.license_expiring_on}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default OrganizationDetails;
