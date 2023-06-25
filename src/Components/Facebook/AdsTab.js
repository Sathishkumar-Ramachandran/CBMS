import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import { Facebook } from '@mui/icons-material';

function AdsTab() {
  const [tabvalue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div style={{width: '100%'}}>
      <Tabs 
        tabvalue={tabvalue} 
        onChange={handleChange} 
        style={{ borderBottom: '1px solid green' }}
        TabIndicatorProps={{
            style: {
              borderBottom: '2px blue',
            },
          }}>
        <Tab label="Campaigns" style={{paddingRight: 10}}   />
        <Tab label="Ad Set" style={{paddingRight: 10}}/>
        <Tab label="Ads" style={{paddingRight: 10}}/>
      </Tabs>

      <Typography>
        
        {tabvalue === 0 && <p>Campaigns</p>}

        {tabvalue === 1 && <p>Ad Set</p>}

       
        {tabvalue === 2 && <p>Ads</p>}
      </Typography>
    </div>
  );
}

export default AdsTab;
