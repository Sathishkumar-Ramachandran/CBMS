import React, { Component } from 'react';
import {SchemaTable, FilterComponent} from '../../table'


class UsersAdmin extends Component {
  state = {
    schema: [], // Initial schema
    data: [], // Initial data
    filteredSchema: [], // Filtered schema
    filteredData: [], // Filtered data
  };

  componentDidMount() {
    // Fetch schema and data from MongoDB or set initial values
    this.fetchSchema();
    this.fetchData();
  }

  fetchSchema = async () => {
    // Fetch schema from MongoDB or set initial schema
    // Update the state with the fetched or initial schema
    const schema = ["name", "age", "email"]; // Sample schema
    this.setState({ schema, filteredSchema: schema });
  };

  fetchData = async () => {
    // Fetch data from MongoDB or set initial data
    // Update the state with the fetched or initial data
    const data = [
      { _id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
      { _id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com' },
      // Add more data objects as needed
    ];
    this.setState({ data, filteredData: data });
  };

  handleFilterSchemaChange = (filterValue) => {
    const { schema } = this.state;

    if (!filterValue) {
      // If no filter value, set the filtered schema to the original schema
      this.setState({ filteredSchema: schema });
    } else {
      // Filter the schema based on the selected field
      const filteredSchema = schema.filter((field) => field.toLowerCase().includes(filterValue.toLowerCase()));
      this.setState({ filteredSchema });
    }
  };

  handleFilterDataChange = (filterValue) => {
    const { data } = this.state;

    if (!filterValue) {
      // If no filter value, set the filtered data to the original data
      this.setState({ filteredData: data });
    } else {
      // Filter the data based on the selected field
      const filteredData = data.filter((item) => {
        // Filter based on the values in the data object properties
        for (let key in item) {
          if (item[key].toString().toLowerCase().includes(filterValue.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
      this.setState({ filteredData });
    }
  };

  render() {
    const { filteredSchema, filteredData } = this.state;

    return (
      <div style={{margin: "10%", display:'flex'}} >
        <div>
            <SchemaTable data={filteredData} />
        </div>
        <div >
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
