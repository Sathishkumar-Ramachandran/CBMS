import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Googleaccount from "./googleaccount";
import Viewaccounts from "./viewaccounts";
import CreateGoogleAdsAccountForm from "../../Components/google/createaccount.js";
import "../../styles/Mediasetup.css";
import { redirect } from "react-router-dom";
import axios from "axios";
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
        <Box sx={{ p: 3, rowGap: 2 }}>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Mediasetup() {
  const [value, setValue] = React.useState(0);
  const [userGoogleData, setUserGoogleData] = useState({
    client_id: "",
    client_secret: "",
    developer_token: "",
  });

  const getCredentials = async () => {
    await axios
      .get("http://localhost:10008/api/mediasetup/google/getDataById/12345/")
      .then((x) => {
        if (x.data != "" && x.data != null && x.data != undefined) {
          setUserGoogleData(x.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getRefreshtoken = async () => {
    const scope = "https://www.googleapis.com/auth/adwords";
    const redirect_uri =
      "http://localhost:3000/admin/channels/google/accounts/mediasetup/";
    console.log(userGoogleData.client_id);
    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&access_type=offline&include_granted_scopes=true&response_type=code&redirect_uri=${redirect_uri}&client_id=${userGoogleData.client_id}`;
    window.location.href = url;
  };

  useEffect(() => {
    getCredentials();
  }, []);
  const [authCode, setAuthCode] = useState();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    setAuthCode(code);

    // Perform further actions with the code parameter
    // ...
  }, [window.location.href]);
  useEffect(() => {
    GetOAuthToken();
  }, [userGoogleData, authCode]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const GetOAuthToken = async () => {
    if (userGoogleData.client_id && userGoogleData.client_secret && authCode) {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const body = {
        code: authCode,
        client_id: userGoogleData.client_id,
        client_secret: userGoogleData.client_secret,
        redirect_uri:
          "http://localhost:3000/admin/channels/google/accounts/mediasetup/",
        grant_type: "authorization_code",
      };
      await axios
        .post("https://oauth2.googleapis.com/token", body, { headers })
        .then((d) => {
          console.log(d);
          updaterefreshToken(d.data.refresh_token)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const addClientData = (value, key) => {
    const temp = { ...userGoogleData };
    temp[key] = value;
    setUserGoogleData(temp);
  };

  const updaterefreshToken = async (r_token) => {
    const body = { token: r_token, companyId: "12345" };
    await axios
      .post(
        "http://localhost:10008/api/mediasetup/google/updateRefreshToken",
        body
      )
      .then((x) => {
        if (x.data.status == 1) {
          alert("sucesss");
          //getRefreshtoken();
        }
      })
      .catch((y) => {
        console.log(y)
      });
  };

  const sendToServer = async (e) => {
    const body = { ...userGoogleData, companyId: "12345" };
    await axios
      .post("http://localhost:10008/api/mediasetup/google/saveGoogleData", body)
      .then((x) => {
        if (x.data.status == 1) {
          getRefreshtoken();
        }
      })
      .catch((y) => {});
  };

  return (
    <div className="mediasetup-gap" sx={{ gap: 2 }}>
      <Box sx={{ width: "80%", m: 15, p: 3, rowGap: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Get Credentials" {...a11yProps(0)} />
            <Tab label="Create Account" {...a11yProps(1)} />
            <Tab label="View Accounts" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Googleaccount
            userGoogleData={userGoogleData}
            addData={addClientData}
            sToServer={sendToServer}
          />
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
