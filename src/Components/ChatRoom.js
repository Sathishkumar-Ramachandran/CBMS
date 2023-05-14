import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Avatar, Box, Typography, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #3f51b5',
    borderRadius: 4,
    overflow: 'hidden',
  },
  group: {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: 8,
    fontWeight: 'bold',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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
  chatInputContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    borderTop: '1px solid #f5f5f5',
    justifyContent: 'flex-end'
  },
  chatInput: {
    flexGrow: 1,
    marginRight: 8,
    backgroundColor: 'white'
  },
  chatButton: {
    minWidth: 'unset',
  },
  messageContainer: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: 8,
    backgroundColor: 'white',
    
  },
  message: {
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  messageSelf: {
    backgroundColor: '#dcf8c6',
  },
  messageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  messageSender: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  messageText: {
    whiteSpace: 'pre-wrap',
  },
  messageTimestamp: {
    fontSize: '0.8rem',
    textAlign: 'right',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    borderTop: '1px solid #f5f5f5',
  },
  input: {
    flexGrow: 1,
    marginRight: 8,
  },
};



function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};
const Chatroom = ({user}) => {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const messageContainerRef = useRef(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get(`http://localhost:5000/api/messages/${user.id}`);
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMessages();
  }, [user]);

  useEffect(() => {
    messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/messages', {
        senderId: user.id,
        content: message,
      });
      setMessages((prevMessages) => [...prevMessages, response.data]);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '30%', width: "25%", float: 'right' }}>
      <Box style={styles.group}>
        <div style={{display: 'flex'}}>
        <Avatar style={styles.userAvatar} alt={user.name} src={user.avatarUrl} />
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {user.name}
            {/* {user.designation} */}
          </div>
        <CloseIcon style={{alignItems: 'right'}} color='primary'/> 
 
        </div>
      </Box>
      <div style={styles.messageContainer} ref={messageContainerRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{ ...styles.message, ...(message.senderId === user.id && styles.messageSelf) }}
          >
            <div style={styles.messageContent}>
              <Typography style={styles.messageSender}>{message.senderName}</Typography>
              <Typography style={styles.messageText}>{message.content}</Typography>
            </div>
            <Typography style={styles.messageTimestamp}>{formatTimestamp(message.createdAt)}</Typography>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} style={styles.chatInputContainer}>
        <TextField
          variant="outlined"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.chatInput}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button type="submit" variant="contained" disabled={!message} style={styles.chatButton}>
                Send
              </Button>
            ),
          }}
        />
      </form>
    </div>
  );
        }

export default Chatroom;


