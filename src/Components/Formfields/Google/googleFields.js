import React from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import GoogleUserFields from "./UserFields";
import GoogleRoleFields from "./RoleFields";
import GoogleGroupFields from "./GroupsFields";
import CreateGoogleAdFields from "./CreateAds";
import GoogleCampaignFields from "./CampaignFormFields";
import CreateGoogleAdGroupFields from "./adGroupsFields";

//Tab Components



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GoogleFields() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
    <Box sx={{ width: '80%', m: 15 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
        scrollButtons="auto">
          {/* <Tab label="User Fields " {...a11yProps(0)} />
          <Tab label="Role Fields" {...a11yProps(1)} />
          <Tab label="Group Fields" {...a11yProps(2)} /> */}
          <Tab label="Campaign Form" {...a11yProps(0)} />
          <Tab label="AdGroup Form" {...a11yProps(1)} />
          <Tab label="Create Ad Form" {...a11yProps(2)} />
          {/* <Tab label="Project Fields" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        <GoogleUserFields />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GoogleRoleFields />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GoogleGroupFields /> 
  </TabPanel> */}
      <TabPanel value={value} index={0}>
        <GoogleCampaignFields />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateGoogleAdGroupFields />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreateGoogleAdFields />
      </TabPanel>
      <TabPanel value={value} index={3}>
   
      </TabPanel>
    </Box>
    </div>
  );
}