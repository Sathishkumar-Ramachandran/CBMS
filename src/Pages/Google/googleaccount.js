import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';


const Googleaccount = () => {
    return(
        <div>
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
            Add Account</Button>
        </div>
    )
}

export default Googleaccount;