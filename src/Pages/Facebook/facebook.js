import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import AdsTab from '../../Components/Facebook/AdsTab';

function FacebookPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{margin: '5%', width: '100%'}}>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        centered
        style={{ borderBottom: '1px solid green' }}
        >
        
        <Tab label="Ads" />
        <Tab label="Post" />
        <Tab label="Analytics" />
      </Tabs>

      <Typography>
        {/* Content for Tab 1 */}
        {value === 0 && <AdsTab />}

        {/* Content for Tab 2 */}
        {value === 1 && <p>Tab 2 content</p>}

        {/* Content for Tab 3 */}
        {value === 2 && <p>Tab 3 content</p>}
      </Typography>
    </div>
  );
}

export default FacebookPage;
