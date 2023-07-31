import React, { Component, useEffect } from "react";
import { SchemaTable, FilterComponent} from "../../Components/table";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material/";
import { useState } from "react";
import PropTypes from 'prop-types';
import '../../styles/Ads.css'
const AdsTable = () => {
  const [props, setProps] = useState([]);
  const [adsList, setAdsList] = useState([]);
  const [apidata, setAPIdata] = useState({});
  const [header, setHeader] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    getSchema();
    getAdsList();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getAdsList = async () => {
    await axios
      .get("http://localhost:10008/api/formfields/google/ads/allads/123456")
      .then((d) => {
        const keys = getUniqueKeys(d.data);
        setHeader(keys);

        if (d.data.length > 0) {
          setAdsList(d.data);
        }
      });
  };

  function getUniqueKeys(adsList) {
    const keysSet = new Set();

    adsList.forEach((user) => {
      const keys = Object.keys(user);
      keys.forEach((key) => {
        keysSet.add(key);
      });
    });

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
    console.log(temp)
    console.log(label);
    console.log(value);
  };

  const createAd = async () => {
    let payload = {
      companyId: "123456",
      data: apidata,
    };
    await axios
      .post("http://localhost:10008/api/formfields/google/ads/createad/123456", payload)
      .then(() => {
        getAdsList();
      })
      .catch(() => {});
  };

  const getSchema = async () => {
    await axios
      .get("http://localhost:10008/api/formfields/google/ads/getschema/123456/")
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

    <div style={{ display: "flex" ,width:'80%',marginLeft:"20%",  }}>
      <div style={{ display: "grid", }}>
        {adsList.length > 0 && <div className="userName-input"><h1 style={{
          color:'#00693E', 
          marginTop: 60,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"}}>GoogleAds</h1></div>}
        <div style={{ Width: '100%', overflowX: 'auto', margin: '3px' }} >
          <Table className="table">
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
              {adsList.map((ad) => (
                <TableRow key={ad._id} >
                  {header.map((key) => (
                    <TableCell key={key}>{ad[key] || ""} 
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
       <div className="google-scrollbar">
        <div style={{ borderBottom: 1, borderColor: 'divider', borderLeft: '1px solid black',display:"flex" }}>
          <Button onClick={() => handleChange(null, 0)} sx={{ m: 1, bgcolor: value === 0 ? '#00693E' : 'transparent', color: value === 0 ? 'white' : 'black', width: '50%', borderRadius: '0' }}>Create Ad</Button>
          <Button onClick={() => handleChange(null, 1)} sx={{ m: 1, bgcolor: value === 1 ? '#00693E' : 'transparent', color: value === 1 ? 'white' : 'black', width: '50%', borderRadius: '0' }}>Filter</Button>
        </div>
        
        {value === 0 && (
          <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '300px' }}>
            {props.map((property, index) => {
              if (property.tool === "SingleLineText") {
                return (
                  <div className="input-Label-Box">
                    <div className="input-Label">
                      <div key={index}>
                        <TextField
                          sx={{ m: 1 }}
                          label={property.label}
                          value={apidata[property.label] || ""}
                          onChange={(e) => {
                            handleChangeTextField(e.target.value, property.label);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              } else if (property.tool === "Paragraph") {
                return <div key={index}></div>;
              } else if (
                property.tool === "Dropdown" &&
                property?.value?.length > 0
              ) {
                const options = property.value;
                return (
                  <div key={index}>
                    <FormControl sx={{width: "225px", marginLeft: "0.5rem"}}>
                      <InputLabel id={`${property.label}-label`}>
                        {property.label}
                      </InputLabel>
                      <Select
                        labelId={`${property.label}-label`}
                        id={`${property.label}-select`}
                        value={options}
                        onChange={(e)  => handleChangeTextField(e.target.value, property.label)}
                      >
                        {property.value.map((option, index) => (
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
            <Button onClick={createAd} className='input-Button' variant="outlined" sx={{ m: 5 }}>
              Save
            </Button>
          </div>
        )}
        {value === 1 && (
          <div >
            <h5>Filter Component</h5>
          </div>
        )}
      </div>
    </div>
 
  );
};

export default AdsTable;
