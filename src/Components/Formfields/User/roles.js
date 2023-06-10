import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//CSS
import "../../../styles/campaignform.css";
import Toolkit from "../../Formfields/toolkit";
import { BiText } from "react-icons/bi";
import { BiParagraph } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

const RoleFieldsDefault = [
  {
    label: "Role Name",
    tool: "SingleLineText",
    properties: "",
    onChange: (event, property) =>
      console.log("First Name value changed to:", event.target.value, property),
    key: true,
  },
  {
    label: "Department",
    tool: "SingleLineText",
    properties: "",
    onChange: (event, property) =>
      console.log("Message value changed to:", event.target.value, property),
    key: true,
  },

];

const AdminRoleFields = () => {
  useEffect(() => {
    getSchema();
  }, []);

  const getSchema = async () => {
    await axios
      .get("http://localhost:10009/api/formfields/admin/users/roles/getschema/123456/")
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
  const [props, setProps] = useState(RoleFieldsDefault);
  const [schema, setSchema] = useState({});
  const [formData, setFormData] = useState({});
  const [showDisabled, setShowDisabled] = useState(true);
  // useEffect(() => {
  //   // Fetch the schema from MongoDB
  //    axios.get('http://localhost:3001/api/update')
  //     .then(response => {
  //       // Parse the schema and set it in state
  //       setSchema(JSON.parse(response.data));

  //     })
  //     .catch(error => console.error(error));
  // }, []);

  const handleInputChange = (event) => {
    // Update the form data when a field is changed
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the updated data to MongoDB
    axios
      .post("/api/update", formData)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  const saveSchema = async (e) => {
    e.preventDefault();
    console.log(props);
    let schema = [];
    let mongo_schema = [];
    props.map((x) => {
      schema.push({
        label: x.label,
        tool: x.tool,
        key: x.key,
        value: x.options
      });

      
      if (x.tool === "SingleLineText" || "MultiLineText" || "Number") {
        mongo_schema.push({ Name: x.label, type: "String", required: true });
      }
      if (x.tool === "Dropdown") {
        mongo_schema.push({Name: x.label, type: "String", value: x.options, required: true})
      }
    });

    console.log(schema, "saveSchema");

    let payload = {
      companyId: "123456",
      schema: schema,
      mongo_schema: mongo_schema,
    };

    axios
      .post(
        "http://localhost:10009/api/formfields/admin/users/roleschema/123456/",
        payload
      )
      .then(() => {
        toast.success("saved");
      })
      .catch("failed");
  };

  const renderFields = () => {
    // Iterate over the schema and create MUI fields
    if (Object.keys(schema).length === 0) {
      return null;
    }
    return Object.keys(schema?.properties).map((key) => {
      const field = schema.properties[key];
      const { type, label } = field;

      // return Object.keys(schema).map(key => {
      //   const field = schema[key];
      //   const { type, label } = field;
      console.log(schema);
      switch (type) {
        case "string":
          return (
            <div>
              <TextField
                key={key}
                name={key}
                label={label}
                value={formData[key] || ""}
                onChange={handleInputChange}
                
              />
              <DeleteIcon
                display="inherit"
                style={{ width: "20px", padding: "2px" }}
              />
            </div>
          );
        case "button":
          return (
            <Button
              key={key}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              {label}
            </Button>
          );
        case "object":
          return null;
        default:
          return null;
      }
    });
  };

  return (
    <div  className="formfielddiv-main">
      <div style={{ float: "right" }}>
        <Button
          variant="contained"
          onClick={() => setShowDisabled(false)}
          endIcon={<SaveOutlinedIcon />}
        >
          Edit
        </Button>

        <Button
          variant="contained"
          disabled={showDisabled}
          endIcon={<SaveOutlinedIcon />}
          onClick={saveSchema}
          sx={{ margin: 2 }}
        >
          Save
        </Button>

        {!showDisabled && (
          <Button
            variant="contained"
            sx={{ margin: 2 }}
            onClick={() => setShowDisabled(true)}
          >
            Cancel
          </Button>
        )}
      </div>
     
      <div >
        <Toolkit
          props={props}
          setProps={setProps}
          saveSchema={saveSchema}
          className="Default"
        />
      </div>
      <div style={{ padding: "15px", margin: "3px" }}>
        {/* <h4>User Fields</h4> */}
        <form onSubmit={handleSubmit} className="formfield">
          {renderFields()}
        </form>
      </div>
    </div>
  );
};

export default AdminRoleFields;
