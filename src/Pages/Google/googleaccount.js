import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';

const Googleaccount = () => {
    return(
        <div>
          <div>
            <Box>
            <TextField
              required
              id="outlined-required"
              helperText="Please enter your Developer Token"
              label="Developer Token"
              defaultValue="Client Id"
              sx={{m:5}}
        />
           </Box>
          </div>
          <TextField
          required
          id="outlined-required"
          helperText="Please enter the Client Id"
          label="Client ID"
          defaultValue="Client Id"
          sx={{m:5}}
        />
        <TextField
          required
          id="outlined-required"
          helperText="Please enter the Client Secret"
          label="Client Secret"
          defaultValue="Client Secret"
          sx={{m:5}}
        />  
        <Button variant="contained" sx={{m:6}}
        endIcon={<SendIcon />}>
            Generate Refresh Token</Button>
            <h5 style={{paddingLeft: "35px"}}>Note: To Generate Refresh Token you have to authenticate Google with OAuth</h5>
        </div>
    )
}

export default Googleaccount;