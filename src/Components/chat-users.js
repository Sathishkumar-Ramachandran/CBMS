import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Box, Typography, Modal, Backdrop } from '@mui/material';
import Chatroom from './ChatRoom';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    border: '1px solid #3f51b5',
    borderRadius: 4,
    overflow: 'auto',
  },
  group: {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: 8,
    fontWeight: 'bold',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'scroll',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  userAvatar: {
    marginRight: 8,
  },
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

  const groups = {};

  // Group users by group field
  users?.forEach((user) => {
    if (!groups[user?.group]) {
      groups[user.group] = [];
    }
    groups[user?.group].push(user);
  });

  const groupKeys = Object.keys(groups);
  const firstGroup = groupKeys.shift();

  const handleOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
    setBackdropOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBackdropOpen(false);
  };

  return (
    <div style={{ margin: '4.3vw', height: '100vw' }}>
      <Box style={styles.root}>
        <Box style={styles.group}>{firstGroup}</Box>
        {groups[firstGroup]?.map((user) => (
          <div key={user.id} style={{ cursor: 'pointer' }} onClick={() => handleOpen(user)}>
            <Box style={styles.user} borderBottom={1}>
              <Avatar style={styles.userAvatar} alt={user.name} src={user.avatarUrl} />
              <Typography>{user.name}</Typography>
            </Box>
          </div>
        ))}
        {groupKeys.map((group) => (
          <React.Fragment key={group}>
            <Box style={styles.group}>{group}</Box>
            {groups[group].map((user) => (
              <div key={user.id} style={{ cursor: 'pointer' }} onClick={() => handleOpen(user)}>
                <Box style={styles.user} borderBottom={1}>
                  <Avatar style={styles.userAvatar} alt={user.name} src={user.avatarUrl} />
                  <Typography>{user.name}</Typography>
                </Box>
              </div>
            ))}
          </React.Fragment>
        ))}
      </Box>

      {selectedUser && (
        <Backdrop open={backdropOpen} onClick={handleClose}>
          <Modal open={true} style={styles.modal}>
            <Chatroom user={selectedUser} onClose={handleClose} />
          </Modal>
        </Backdrop>
      )}
    </div>
  );
};

export default UserList;
