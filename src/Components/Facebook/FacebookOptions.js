import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../../styles/Facebook/FacebookOptions.css'
import MediaSetup from "./MediaSetup.js";

const FacebookOptions = ({ items }) => {
  const [comp, setComp] = useState(<MediaSetup />)
  return(
    <div className="container">
      <div className="FacebookOptions">
        <List>
          {
            items.map((item, index) => (
            <ListItem button  key={index} onClick={() => setComp(item.comp)}>
              <ListItemText primary={item.option}  />

            </ListItem>
          ))} 
        </List>
      </div>

      <div className="comp">
          {comp}
      </div>

    </div>
  )
};

export default FacebookOptions;