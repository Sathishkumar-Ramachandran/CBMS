import React, { Component, useEffect } from "react";
import { SchemaTable, FilterComponent } from "../../table";
import addUser from "./addUser";
import axios from "axios";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material/";
import { useState } from "react";
import '../../../styles/user.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';







const UsersAdmin = () => {
  const [props, setProps] = useState([]);
  const [userlist, setUserlist] = useState([]);
  const [apidata, setAPIdata] = useState({});
  const [header, setHeader] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    getSchema();
    getUserList();
  }, []);
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
          <Box sx={{ p: 3 }}>
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const getUserList = async () => {
    await axios
      .get("http://localhost:10008/api/mongo/FormFields/getAllUser/123456")
      .then((d) => {
        const keys = getUniqueKeys(d.data);
        setHeader(keys);

        if (d.data.length > 0) {
          setUserlist(d.data);
        }
      });
  };

  function getUniqueKeys(userList) {
    const keysSet = new Set(); // Use a set to store unique keys

    userList.forEach((user) => {
      const keys = Object.keys(user);
      keys.forEach((key) => {
        keysSet.add(key);
      });
    });

    // Convert the set to an array and return
    return Array.from(keysSet);
  }

  useEffect(() => {
    let json = {};
    props.forEach((x) => {
      json = { ...json, [x.label]: "" };
    });
    setAPIdata(json);
  }, [props]);

  useEffect(() => {
    console.log(apidata);
  }, [apidata]);

  const handleChangeTextField = (value, label) => {
    let temp = { ...apidata };
    temp[label] = value;
    setAPIdata(temp);
    //  console.log(temp)
  };

  const saveUser = async () => {
    let payload = {
      companyId: "123456",
      data: apidata,
    };
    await axios
      .post("http://localhost:10008/api/mongo/FormFields/addUser", payload)
      .then(() => {
        getUserList();
      })
      .catch(() => {});
  };

  const getSchema = async () => {
    await axios
      .get("http://localhost:10008/api/mongo/FormFields/getSchema/123456/")
      .then((d) => {
        console.log(d.data);
        if (d.data.length > 0) {
          setProps(d.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ margin: 50, display: "flex",}} >
      <div style={{ display: "grid"}} className="tableinput-main">

      {userlist.length > 0 && <div className="userName-input"><h1 style={{color:'#00693E'}}>Users</h1></div>}
      <div style={{ maxWidth: '100vw', overflowX: 'auto', margin: 8, }}className="table-input">
  
      <Table >

        <TableHead sx={{ bgcolor: '#00693E', whiteSpace: 'nowrap' }}>
          <TableRow >
            {header.map((x) => {
              return (
                <TableCell key={x} sx={{color: 'white'}}> {x} </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {userlist.map((user) => (
            <TableRow key={user._id} >
                {header.map((key) => (
                  <TableCell key={key}>{user[key] || ""} 
                  </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </div>
        </div>
        <div style={{marginRight: '0%' }} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', borderLeft: '1px solid black'  }}>
        <Tabs value={value} onChange={handleChange} 
        aria-label="full width tabs example" 
        centered 
        sx={{ bgcolor: '#00693E', }} 
      >
          <Tab label="Create User" {...a11yProps(0)}  sx={{color: 'white' }}/>
          <Tab label="Filter User" {...a11yProps(1)}   sx={{color: 'white'}}/>
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <div className="border-Box-Right"></div>
      <TabPanel value={value} index={0}>
      {props.map((property, index) => {
    if (property.tool === "SingleLineText") {
      return (
        <div className="input-Label-Box">
        <div className="input-Label">
        <div key={index}>
          <TextField
          sx={{ m: 1}}
            label={property.label}
            onChange={(e) => {
              handleChangeTextField(e.target.value, property.label);
            }}
          />
        </div></div></div>
      );
    } else if (property.tool === "Paragraph") {
      return <div key={index}></div>;
    } else if (
      property.tool === "Dropdown" &&
      property?.options?.length > 0
    ) {
      const options = property.properties.split(",");
      return (
        <div key={index}>
          <FormControl fullWidth>
            <InputLabel id={`${property.label}-label`}>
              {property.label}
            </InputLabel>
            <Select
              labelId={`${property.label}-label`}
              id={`${property.label}-select`}
              value={""}
              // onChange={(e) => handleFieldChange(e, property)}
            >
              {property.options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    } else {
      return null;
    }
  })}
  <button Click={saveUser} className='input-Button' variant="outlined" sx={{m:5}}>
    Save
    </button>
 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h5>Filter Component</h5>
      </TabPanel>
      </div>
        
</div>
);
};

export default UsersAdmin;
