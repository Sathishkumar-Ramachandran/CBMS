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
import { FormControl, InputLabel, MenuItem } from "@mui/material/";
import { useState } from "react";
const UsersAdmin = () => {
  const [props, setProps] = useState([]);
  const [userlits, setUserlist] = useState([]);
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

  render() {
    const { filteredSchema, filteredData } = this.state;

    return (
    
      <div className='schemaTable'>
        <div className='schematable-filter'>
      <SchemaTable data={filteredData}   />
  </div>
        
        <div  className='filtercomponent-right' >
            <FilterComponent
            schema={filteredSchema}
            onFilterSchemaChange={this.handleFilterSchemaChange}
            onFilterDataChange={this.handleFilterDataChange}
           
            />  
        </div>
      </div>

    );
  }
}
      
export default UsersAdmin;
