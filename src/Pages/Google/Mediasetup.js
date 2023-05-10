import React from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Googleaccount from "./googleaccount";
import Viewaccounts from "./viewaccounts";
import CreateGoogleAdsAccountForm from '../../Components/google/createaccount.js';
import '../../styles/Mediasetup.css';
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
        <Box sx={{ p: 3 ,rowGap: 2}}>
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
    <div className="mediasetup-gap" sx={{ gap: 2 }}>

   <Box sx={{ width: '80%', m: 15, p: 3 ,rowGap: 2}}>
   
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Get Credentials" {...a11yProps(0)} />
          <Tab label="Create Account" {...a11yProps(1)} />
          <Tab label="View Accounts" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Googleaccount />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="creategoogleaccount">
        <CreateGoogleAdsAccountForm />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Viewaccounts />
      </TabPanel>
    </Box>
    </div>
  );
}