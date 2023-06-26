// LeftNavBarComponent.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const AccountFacebook = ({ items }) => {
  return (
    <div className="left-nav-bar">
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primary={item.option} />
            {item.comp && <item.comp />}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AccountFacebook;
