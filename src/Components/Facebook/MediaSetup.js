import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";

const MediaSetup = () => {
  const [userFacebookData, setUserFacebookData] = useState({
    app_id: "",
    app_secret: "",
    developer_token: "",
    refresh_token: ""
  });

  useEffect(() => {
    getCredentials();
  }, []);

  const getCredentials = async () => {
    try {
      const response = await axios.get(
        "http://localhost:10008/api/mediasetup/google/getDataById/12345/"
      );
      if (response.data) {
        setUserFacebookData(response.data);
      }
    } catch (error) {
      console.error('Error getting credentials:', error.message);
    }
  };

  const [authCode, setAuthCode] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      setAuthCode(code);
    }
  }, []);

  useEffect(() => {
    if (userFacebookData.app_id && userFacebookData.app_secret && authCode) {
      getOAuthToken();
    }
  }, [userFacebookData, authCode]);

  const getOAuthToken = async () => {
    try {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const body = {
        code: authCode,
        app_id: userFacebookData.app_id,
        app_secret: userFacebookData.app_secret,
        redirect_uri:
          "http://localhost:3000/admin/channels/google/accounts/mediasetup/",
        grant_type: "authorization_code",
      };
      const response = await axios.post(
        "https://oauth2.googleapis.com/token",
        new URLSearchParams(body),
        { headers }
      );
      const refreshToken = response.data.refresh_token;
      console.log('Refresh token:', refreshToken);
      updateRefreshToken(refreshToken);
    } catch (error) {
      console.error('Error getting OAuth token:', error.message);
    }
  };

  const updateRefreshToken = async (r_token) => {
    const body = { token: r_token, companyId: "12345" };
    try {
      const response = await axios.post(
        "http://localhost:10008/api/mediasetup/google/updateRefreshToken",
        body
      );
      if (response.data.status === 1) {
        alert("success");
        //getRefreshtoken();
      }
    } catch (error) {
      console.error('Error updating refresh token:', error.message);
    }
  };

  const addClientData = (value, key) => {
    const temp = { ...userFacebookData };
    temp[key] = value;
    setUserFacebookData(temp);
  };

  const getRefreshtoken = async () => {
    let APP_ID = userFacebookData.app_id
    let APP_SECRET = userFacebookData.app_secret
    let ACCESS_TOKEN = userFacebookData.developer_token
    try {
      const response = await axios.get(
        `https://graph.facebook.com/v12.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${ACCESS_TOKEN}`
        );
      const refresh_token = response.data.access_token;
      console.log('Refresh token:', refresh_token);
      return refresh_token;
    } catch (error) {
      console.error('Error getting refresh token:', error.message);
      return null;
    }
  };

  const sendToServer = async (e) => {
    const body = { ...userFacebookData, companyId: "123456" };
    try {
      const response = await axios.post(
        "http://localhost:10008/api/mediasetup/google/saveGoogleData",
        body
      );
      if (response.data.status === 1) {
        getRefreshtoken();
      }
    } catch (error) {
      console.error('Error sending data to server:', error.message);
    }
  };

  return (
    <>
      <div style={{ margin: 55 }}>
        <div>
          <FormControl variant="standard" style={{ paddingRight: 55 }}>
            <InputLabel htmlFor="input-with-icon-adornment">
              App ID
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={userFacebookData.app_id}
              onChange={(e) => addClientData(e.target.value, "app_id")}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard" style={{ paddingRight: 55 }}>
            <InputLabel htmlFor="input-with-icon-adornment">
              App Secret
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={userFacebookData.app_secret}
              onChange={(e) => addClientData(e.target.value, "app_secret")}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <Button variant="contained" style={{ marginTop: 15 }} onClick={sendToServer}>
          Get Details
        </Button>
      </div>
      {/* <div>
        <h1 style={{ padding: 5 }}>Account Details</h1>
      </div> */}
    </>
  );
};

export default MediaSetup;
