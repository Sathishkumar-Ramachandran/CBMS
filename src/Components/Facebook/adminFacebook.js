import React from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import FacebookAccountSetup from './AccountSetup';
import FacebookCampaignSetup from './CampaignSetup';
import Adset from './adSet';
import Ads from './ads';
import Facebookothers from './facebookOthers';

function FacebookAdmin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{margin: '5%', width: '100%'}}>
      <Tabs value={value} onChange={handleChange} 
      style={{ borderBottom: '1px solid green' }} 
        >
        <Tab label="Account Setup" />
        <Tab label="Campaign Setup" />
        <Tab label="AdSet Setup" />
        <Tab label="Ads Setup" />
        <Tab label="Other Setup" />
      </Tabs>

      <Typography>
        {/* Content for Tab 1 */}
        {value === 0 && <FacebookAccountSetup />}

        {/* Content for Tab 2 */}
        {value === 1 && <FacebookCampaignSetup />}

        {/* Content for Tab 3 */}
        {value === 2 && <Adset />}

        {value === 3 && <Ads />}

        {value === 4 && <Facebookothers />}
      </Typography>
    </div>
  );
}

export default FacebookAdmin;
