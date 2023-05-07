import React from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//Tab Components
import CreateAdsFields from "../../Components/Formfields/Google/CreateAds";
import GoogleUserFields from "../../Components/Formfields/Google/UserFields";
import GoogleRolesFields from "../../Components/Formfields/Google/RoleFields";
import GoogleGroupsFields from "../../Components/Formfields/Google/GroupsFields";


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

export default function Mediasetup() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%', m: 15 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
        scrollButtons="auto">
          <Tab label="Create Ads " {...a11yProps(0)} />
          <Tab label="Users Fields" {...a11yProps(1)} />
          <Tab label="Roles Fields" {...a11yProps(2)} />
          <Tab label="Group Fields" {...a11yProps(3)} />
          <Tab label="Campaign Fields" {...a11yProps(4)} />
          <Tab label="Ad Groups Fields" {...a11yProps(5)} />
          <Tab label="Budget Fields" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CreateAdsFields />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GoogleUserFields />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GoogleRolesFields />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GoogleGroupsFields />
      </TabPanel>
      <TabPanel value={value} index={4}>
    
      </TabPanel>
      <TabPanel value={value} index={5}>
    
      </TabPanel>
      <TabPanel value={value} index={6}>
    
      </TabPanel>
    </Box>
  );
}