import React, { Component } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

class FilterComponent extends Component {
  state = {
    filterSchemaValue: '',
    filterDataValue: '',
  };

  handleFilterSchemaChange = (event) => {
    const { value } = event.target;
    this.setState({ filterSchemaValue: value }, () => {
      // Pass the filtered schema value back to the parent component
      this.props.onFilterSchemaChange(value);
    });
  };

  handleFilterDataChange = (event) => {
    const { value } = event.target;
    this.setState({ filterDataValue: value }, () => {
      // Pass the filtered data value back to the parent component
      this.props.onFilterDataChange(value);
    });
  };

  render() {
    const { schema } = this.props;
    const { filterSchemaValue, filterDataValue } = this.state;

    return (
      <div className="filter-component">
        <h3 style={{color: "#00AB66"}}>Filter Schema and Data</h3>
        <div>
          <h4 style={{marginTop:'1rem',color:"#00693E"}}>Filter Schema</h4>
          <input
            type="text"
            value={filterSchemaValue}
            onChange={this.handleFilterSchemaChange}
            placeholder="Enter filter value"
            style={{marginTop:'1rem'}}
            className='inputFilter'
          />
          <ul>
            {schema.map((field) => (
              <li key={field}>
                <label>
                  <input
                    type="checkbox"
                    value={field}
                    checked={filterSchemaValue === field}
                    onChange={this.handleFilterSchemaChange}
                    style={{marginTop:'1rem'}}
                  />
                  {field}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 style={{marginTop:'1rem',color:"#00693E"}}>Filter Data</h4>
          <input
            type="text"
            value={filterDataValue}
            onChange={this.handleFilterDataChange}
            placeholder="Enter filter value"
            style={{marginTop:'1rem'}}
            className='inputFilter'
          />
        </div>
      </div>
    );
  }
}



class SchemaTable extends Component {
  state = {
    schema: [],
    data: [],
    loading: true,
    schemaDetails: ('')
  };

  componentDidMount() {
    // Call the function to collect schema details from MongoDB collection
    this.fetchSchema();
  }

  fetchSchema = async () => {
    try {
      const response = await axios.get('http://your-api-endpoint/schema/admin/users'); // Replace with your API endpoint
      const schema = response.data;
      this.setState({ schema }, () => {
        // Once schema is fetched, fetch data for the schema
        this.fetchData();
      });
    } catch (error) {
      console.error('Error fetching schema:', error);
    }
  };

  fetchData = async () => {
    try {
      const response = await axios.get('http://your-api-endpoint/admin/users/data'); // Replace with your API endpoint
      const data = response.data;
      this.setState({ data, loading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { schema, data, loading } = this.state;

    if (loading) {
      return <div> Loading...</div>;
    }

    return (
        <>        
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {schema.map((field) => (
                <TableCell key={field}>{field}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                {schema.map((field) => (
                  <TableCell key={field}>{row[field]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>

    );
  }
}

export {SchemaTable, FilterComponent};
