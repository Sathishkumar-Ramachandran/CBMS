import React, { useState, useEffect, useRef } from 'react';


import { 
    makeStyles, 
    Paper, 
    Typography, 
    TextField, 
    Button, 
    SendIcon, 
    AttachmentIcon, 
    InputAdornment, 
    CircularProgress } from '@mui/material'
import io from 'socket.io-client';
import * as openpgp from 'openpgp';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: 600,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
  },
  chatContainer: {
    overflowY: 'auto',
    height: 'calc(100vh - 130px)',
    marginBottom: theme.spacing(2),
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    maxWidth: '70%',
    alignSelf: 'flex-end',
    position: 'relative',
  },
  message: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: '20px 20px 0px 20px',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    maxWidth: '100%',
    wordBreak: 'break-word',
    position: 'relative',
  },
  sentTime: {
    position: 'absolute',
    bottom: '-16px',
    right: '5px',
    fontSize: '12px',
  },
  myMessageContainer: {
    alignSelf: 'flex-end',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
  },
  avatar: {
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const Chat = ({ user, chatId, recipient, recipientPublicKey }) => {
  // const classes = useStyles();
  // const [messages, setMessages] = useState([]);
  // const [messageText, setMessageText] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [typing, setTyping] = useState(false);
  // const [socket, setSocket] = useState(null);
  // const [encryptedKey, setEncryptedKey] = useState(null);

  // const chatContainerRef = useRef(null);

  // useEffect(() => {
  //   // Connect to the Flask-SocketIO server with SSL/TLS encryption
  //   const socket = io.connect('http://localhost:6000', {
  //     secure: true,
  //     rejectUnauthorized: false,
  //   });
  //   setSocket(socket);
  
  //   const fetchMessages = async () => {
  //     // Generate a random session key for end-to-end encryption
  //     const sessionKey = openpgp.crypto.generateSessionKey('aes256');
  //     const sessionKeyArmored = await openpgp.armor.encode({
  //       message: sessionKey,
  //     });
  
  //     // Encrypt message with the session key
  //     const encryptedMessage = await openpgp.encrypt({
  //       message: await openpgp.message.fromText(messageContent),
  //       sessionKey: sessionKey,
  //     });
  
  //     // Convert the encrypted message to ASCII armored text
  //     const encryptedMessageArmored = await openpgp.armor.encode({
  //       message: encryptedMessage.message,
  //     });
  
  //     // Construct the final message object with the encrypted content and session key
  //     const finalMessage = {
  //       content: encryptedMessageArmored,
  //       sessionKey: sessionKeyArmored,
  //       sender: 'me',
  //       receiver: 'you',
  //       sentTime: Date.now(),
  //     };
      
  //     // Render the message in the chat window
  //     setMessages((prevMessages) => [...prevMessages, finalMessage]);
  //   };
  
  //   fetchMessages();
  // }, []);
  //     // Render the message in the chat window
  //     return (
  //       <div
  //         key={index}
  //         className={`${classes.messageContainer} ${
  //           sender === 'me' ? classes.myMessageContainer : classes.otherMessageContainer
  //         }`}
  //       >
  //         <Typography className={classes.message} variant="body1">
  //           {message.content}
  //         </Typography>
  //         <Typography className={classes.sentTime} variant="body2">
  //           {sentTime}
  //         </Typography>
  //       </div>
  //     )
};