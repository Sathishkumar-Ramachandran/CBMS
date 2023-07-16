import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

const GoogleAccount = () => {
  const [developerToken, setDeveloperToken] = useState("");
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [requiredField, setRequiredField] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const handleGenerateToken = () => {
    if (developerToken && clientId && clientSecret) {
      // Code to generate the refresh token
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
      if (!developerToken) {
        setRequiredField("Developer Token");
      } else if (!clientId) {
        setRequiredField("Client ID");
      } else if (!clientSecret) {
        setRequiredField("Client Secret");
      }
    }
  };

  return (
    <div>
      <div>
        <Box>
          <TextField 
          error = {!developerToken}
         
            required
            id="outlined-required"
            helperText="Please enter your Developer Token"
            label="Developer Token"
            value={developerToken}
            onChange={(e) => setDeveloperToken(e.target.value)}
            sx={{ m: 5,}}
          />
        </Box>
      </div>
      <TextField
        error = {!clientId}

        required
        id="outlined-required"
        helperText="Please enter the Client Id"
        label="Client ID"
        value={clientId}
        onChange={(e) => setClientId(e.target.value)}
        sx={{ m: 5, }}
      />
      <TextField
              error = {!clientSecret}

        required
        id="outlined-required"
        helperText="Please enter the Client Secret"
        label="Client Secret"
        value={clientSecret}
        onChange={(e) => setClientSecret(e.target.value)}
        sx={{ m: 5,  }}
      />
      {/* {!isFormValid && <p>Please fill in the field: {requiredField}</p>} */}
      <Button
        variant="contained"
        sx={{ m: 6 }}
        endIcon={<SendIcon />}
        onClick={handleGenerateToken}
      >
        Generate Refresh Token
      </Button>
      <h5 style={{ paddingLeft: "35px" }}>
        Note: To Generate Refresh Token you have to authenticate Google with OAuth
      </h5>

      <div>
        <Button>
          Upload the Credentials
        </Button>
        <input type="file" style={{ paddingTop: '55px' }} />
      </div>
    </div>
  );
}

export default GoogleAccount;
