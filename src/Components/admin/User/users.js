import React, { Component, useEffect } from "react";
import { SchemaTable, FilterComponent } from "../../table";
import addUser from "./addUser";
import axios from "axios";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material/";
import { useState } from "react";






const UsersAdmin = () => {
  const [props, setProps] = useState([]);
  const [userlist, setUserlist] = useState([]);
  const [apidata, setAPIdata] = useState({});
  const [header, setHeader] = useState([]);
  
  useEffect(() => {
    getSchema();
    getUserList();
  }, []);

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
    <div style={{ margin: 50, display: "flex"}}>
      {userlist.length > 0 && <h1>Users</h1>}
      <div style={{ maxWidth: '70%', overflowX: 'auto', margin: 10 }}>
      <Table >

        <TableHead>
          <TableRow>
            {header.map((x) => {
              return (
                <TableCell key={x}> {x} </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {userlist.map((user) => (
            <TableRow key={user._id}>
                {header.map((key) => (
                  <TableCell key={key}>{user[key] || ""} 
                  </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </div>
        <div>

        {props.map((property, index) => {
    if (property.tool === "SingleLineText") {
      return (
        <div key={index}>
          <TextField
            label={property.label}
            onChange={(e) => {
              handleChangeTextField(e.target.value, property.label);
            }}
          />
        </div>
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
              //onChange={(e) => handleFieldChange(e, property)}
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
  <Button onClick={saveUser}>Save</Button>
  </div>
</div>
);
};

export default UsersAdmin;
