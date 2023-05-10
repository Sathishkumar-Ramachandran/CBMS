import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chat from './Chat'; // Import the Chat component
import '../styles/chat.css';






const users = [
  {
    id: 1,
    name: "Sathish",
    role: "Engineer",
    photoUrl: "",
    available: true,
  },
  {
    id: 2,
    name: "Muthupandi",
    role: "Engineer",
    photoUrl: "",
    available: false,
  },
  {
    id: 3,
    name: "Praveen",
    role: "Engineer",
    photoUrl: "",
    available: true,
  },
  {
    id: 4,
    name: "Sathish",
    role: "Engineer",
    photoUrl: "",
    available: true,
  },
  {
    id: 5,
    name: "Sathish",
    role: "Engineer",
    photoUrl: "",
    available: false,
  },
  {
    id: 123,
    name: "Sathish",
    role: "Engineer",
    photoUrl: "",
    available: true,
  },
]

const UserList = ({currentUserId}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  var currentUserId = 12; 

  const handleUserClick = (user) => {
    setSelectedUser(user);
    console.log(`${user.name} is connected to the Chat`);
  };

  const handleChatClose = () => {
    setSelectedUser(null);
  };

  return (
    <div className='profile'>
    <Grid container spacing={2} direction="row" >
      {users.map((user) => (
        <Grid item xs={12} md={6} key={user.id}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'background.paper',
              p: 2,
              borderRadius: 1,
              boxShadow: 1,
              height: 80,
              cursor: 'pointer',
            }}
            onClick={() => handleUserClick(user)} className="card"
          >
            <Avatar
              alt={user.name}
              src={user.photoUrl}
              sx={{
                width: 56,
                height: 56,
                mr: 2,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.role}
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: user.available ? 'success.main' : 'error.main',
                borderRadius: '50%',
                width: 8,
                height: 8,
                mr: 1,
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {user.available ? 'Available' : 'Unavailable'}
            </Typography>
          </Box>
        </Grid>
      ))}
      {selectedUser && (
        <Chat
          senderId={currentUserId}
          receiverId={selectedUser.id}
          receiverName={selectedUser.name}
          onClose={handleChatClose}
        />
      )}
    </Grid>
    </div>
  );
};


export default UserList;