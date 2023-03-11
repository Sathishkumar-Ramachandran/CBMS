import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const media = [
 'Google',
 'Youtube',
 'Facebook',
 'Instagram',
 'Twitter'
];


const members = [
    'Sathish',
    'Praveen',
    'Muthupandi',
    'Prakash',

];

const Createproject = () => {

    const [personName, setPersonName] = React.useState([]);
    const [media, setSelectedMedia] = React.useState([]);


    const handlePersonChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setSelectedMedia(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
    return(
        <>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 2, width: '30ch' },
            }}
            noValidate
            autoComplete="on"
            >
           
            <TextField id="filled-basic" label="Project No" variant="filled" />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField id="filled-basic" label="Date" variant="filled" />

            <div className="members">
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Project Members</InputLabel>
                <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handlePersonChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {members.map((name) => (
                    <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            </div>

            <div className="media">
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Media</InputLabel>
                <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                >
                {media.map((name) => (
                    <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            </div>
            </Box>
        </>
    )
}

export default Createproject;