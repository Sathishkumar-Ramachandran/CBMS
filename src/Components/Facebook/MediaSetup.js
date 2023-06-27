import React from "react";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";


const MediaSetup = () => {
    return(
        <>
            <div style={{margin: 55}}>
            <FormControl variant="standard"  style={{paddingRight: 55}}>
                <InputLabel htmlFor="input-with-icon-adornment">
                    Access Token
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl variant="standard" style={{paddingRight: 55}}>
                <InputLabel htmlFor="input-with-icon-adornment">
                    Ad Account ID
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                    }
                />
            </FormControl>
            <Button variant="contained"> Get Details </Button>
            </div>
        </>
    )
};

export default MediaSetup;