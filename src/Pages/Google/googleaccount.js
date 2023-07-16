import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";

const Googleaccount = ({ userGoogleData, addData, sToServer }) => {
  return (
    <div>
      <div>
        <Box>
          <TextField
            required
            id="outlined-required"
            helperText="Please enter your Developer Token"
            label="Developer Token"
            value={userGoogleData.developer_token}
            onChange={(e) => {
              addData(e.target.value, "developer_token");
            }}
            sx={{ m: 5 }}
            error={
              userGoogleData.developer_token == "" ||
              userGoogleData.developer_token == null ||
              userGoogleData.developer_token == undefined
            }
          />
        </Box>
      </div>
      <TextField
        required
        id="outlined-required"
        helperText="Please enter the Client Id"
        label="Client ID"
        onChange={(e) => {
          addData(e.target.value, "client_id");
        }}
        value={userGoogleData.client_id}
        sx={{ m: 5 }}
        error={
          userGoogleData.client_id == "" ||
          userGoogleData.client_id == null ||
          userGoogleData.client_id == undefined
        }
      />
      <TextField
        required
        id="outlined-required"
        helperText="Please enter the Client Secret"
        label="Client Secret"
        onChange={(e) => {
          addData(e.target.value, "client_secret");
        }}
        value={userGoogleData.client_secret}
        sx={{ m: 5 }}
        error={
          userGoogleData.client_secret == "" ||
          userGoogleData.client_secret == null ||
          userGoogleData.client_secret == undefined
        }
      />
      <Button
        variant="contained"
        sx={{ m: 6 }}
        onClick={sToServer}
        disabled={
          userGoogleData.client_secret == "" ||
          userGoogleData.client_secret == null ||
          userGoogleData.client_secret == undefined ||
          userGoogleData.client_id == "" ||
          userGoogleData.client_id == null ||
          userGoogleData.client_id == undefined ||
          userGoogleData.developer_token == "" ||
          userGoogleData.developer_token == null ||
          userGoogleData.developer_token == undefined
        }
        endIcon={<SendIcon />}
      >
        Generate Refresh Token
      </Button>
      <h5 style={{ paddingLeft: "35px" }}>
        Note: To Generate Refresh Token you have to authenticate Google with
        OAuth
      </h5>

      <div>
        <Button>Upload the Credentials</Button>
        <input type="file" style={{ paddingTop: "55px" }} />
      </div>
    </div>
  );
};

export default Googleaccount;
