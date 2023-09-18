import React, { useState } from "react";
import axios from "axios";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

const MediaSetup = () => {
  const [userFacebookData, setUserFacebookData] = useState({
    app_id: "",
    app_secret: "",
    developer_token: "",
    refresh_token: "",
  });
  const [authCode, setAuthCode] = useState("");

  const addClientData = (value, key) => {
    setUserFacebookData((prevData) => ({ ...prevData, [key]: value }));
  };

  const sendToServer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:10002/api/facebook/mediasetup/savefacebookData",
        { ...userFacebookData, companyId: "123456" }
      );
      if (response.data.status === 1) {
        getOAuthToken();
      }
    } catch (error) {
      console.error("Error sending data to server:", error.message);
    }
  };

  const getOAuthToken = async () => {
    try {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const body = {
        code: authCode,
        app_id: userFacebookData.app_id,
        app_secret: userFacebookData.app_secret,
        redirect_uri: "http://localhost:3000/admin/channels/facebook/",
        grant_type: "authorization_code",
      };
      const response = await axios.post(
        "https://graph.facebook.com/v12.0/oauth/access_token",
        new URLSearchParams(body),
        { headers }
      );
      const refreshToken = response.data.refresh_token;
      console.log("Refresh token:", refreshToken);
      updateRefreshToken(refreshToken);
    } catch (error) {
      console.error("Error getting OAuth token:", error.message);
    }
  };

  const updateRefreshToken = async (r_token) => {
    try {
      const response = await axios.post(
        "http://localhost:10002/api/facebook/mediasetup/updaterefreshtoken",
        { token: r_token, companyId: "12345" }
      );
      if (response.data.status === 1) {
        alert("success");
      }
    } catch (error) {
      console.error("Error updating refresh token:", error.message);
    }
  };

  return (
    <>
      <div style={{ margin: 55 }}>
        <div>
          <FormControl variant="standard" style={{ paddingRight: 55 }}>
            <InputLabel htmlFor="input-with-icon-adornment">App ID</InputLabel>
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
    </>
  );
};

export default MediaSetup;
