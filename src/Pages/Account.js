import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import '../styles/Admin/Account/OrganizationDetails.css';

function OrganizationDetails() {
  const [orgDetails, setOrgDetails] = useState(null);

  useEffect(() => {
    const fetchOrganizationDetails = async () => {
      // TODO - get the current user's organizations and select one to display here
      let orgId;
      try {
        const response = await fetch(`/api/organizations/${orgId}`);
        const data = await response.json();
        setOrgDetails(data);
      } catch (error) {
        console.error('Error fetching organization details:', error);
      }
    };

    fetchOrganizationDetails();
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} className='card'>
          <Typography variant="h4" gutterBottom className='card-title'>
            {orgDetails ? orgDetails.name : 'Organization Details'}
          </Typography>
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
        </Paper>
      </Grid>
    </Grid>
  );
}

export default OrganizationDetails;


















// import React, { useState } from 'react';
// import { TextField, Button, Typography } from '@mui/material';
// import '../styles/Admin/Account/OrganizationDetails.css';
// function OrganizationDetails() {
//   const [orgId, setOrgId] = useState('');
//   const [orgDetails, setOrgDetails] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(`/api/organizations/${orgId}`);
//     const data = await response.json();
//     setOrgDetails(data);
//   };

//   return (
//     <div className='card'>
//       <Typography variant="h4" gutterBottom className='card-title'>
//         My Organization
//       </Typography>
//       <form onSubmit={handleSubmit} className='id_form'>
//         <TextField
//           label="Organization ID"
//           value={orgId}
//           onChange={(e) => setOrgId(e.target.value)}
//           margin="normal"
//           variant="outlined"
//         />
//         <Button type="submit" variant="contained" color="primary" className='submit'>
//           Retrieve Details
//         </Button>
//       </form>
//       {orgDetails && (
//         <div>
//           <Typography variant="h5" gutterBottom>
//             {orgDetails.name}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Admin Email: {orgDetails.admin_email}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             Selected Plan: {orgDetails.selected_plan}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             License Activated Date: {orgDetails.license_activated_date}
//           </Typography>
//           <Typography variant="body1" gutterBottom>
//             License Expiring On: {orgDetails.license_expiring_on}
//           </Typography>
//         </div>
//       )}
//     </div>
//   );
// }

// export default OrganizationDetails;
