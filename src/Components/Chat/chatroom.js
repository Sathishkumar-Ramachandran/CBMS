import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Box, Grid, Stack, Avatar, TextField, IconButton, Button, InputAdornment } from '@mui/material';
import { Send as SendIcon, AttachFile as AttachFileIcon, Mood as MoodIcon } from '@mui/icons-material';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  // your firebase config
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const storageRef = storage.ref();

const ChatRoom = ({ user, room }) => {
  // const [socket, setSocket] = useState(null);
  // const [participants, setParticipants] = useState([]);
  // const [availableUsers, setAvailableUsers] = useState([]);
  // const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState('');
  // const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  // const [isStickerPickerOpen, setIsStickerPickerOpen] = useState(false);

  // useEffect(() => {
  //   const newSocket = io(process.env.REACT_APP_API_BASE_URL, {
  //     query: {
  //       username: user,
  //       room: room,
  //     },
  //   });

  //   setSocket(newSocket);

  //   newSocket.on('participants', (data) => {
  //     setParticipants(data.participants);
  //   });

  //   newSocket.on('availableUsers', (data) => {
  //     setAvailableUsers(data.availableUsers);
  //   });

  //   newSocket.on('message', (data) => {
  //     setMessages((prevMessages) => [...prevMessages, data]);
  //   });

  //   newSocket.on('inviteUser', (data) => {
  //     if (data.room === room) {
  //       setAvailableUsers([]);
  //     }
  //   });

  //   return () => {
  //     newSocket.emit('leave', {
  //       username: user,
  //       room: room,
  //     });
  //     newSocket.disconnect();
  //   };
  // }, [user, room]);

  // const sendMessage = (event) => {
  //   event.preventDefault();
  //   if (message) {
  //     socket.emit('message', {
  //       sender: user,
  //       message: message,
  //       room: room,
  //     });
  //     setMessage('');
  //   }
  // };

  // const inviteUser = (user) => {
  //   socket.emit('inviteUser', {
  //     username: user,
  //     room: room,
  //   });
  // };

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];
  //   const uploadTask = storageRef.child(`images/${file.name}`).put(file);
  //   uploadTask.on(
  //     'state_changed',
  //     (snapshot) => {
  //       // handle progress
  //     },
  //     (error) => {
  //       // handle error
  //     },
  //     () => {
  //       // handle success
  //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //         socket.emit('message', {
  //           sender: user,
  //           message: downloadURL,
  //           room: room,
  //         });
  //       });
  //     }
  //   );
  // };

  // const addEmoji = (emoji) => {
  //   setMessage((prevMessage) => prevMessage + emoji.native);
  // };

  // const addSticker = (stickerUrl) => {
  //   socket.emit('message', {
  //     sender: user,
  //     message: stickerUrl,
  //     room: room,
  //   });
  // };



  
  //   return (
  //     <Box sx={{ flexGrow: 1 }}>
  //       <Grid container spacing={2}>
  //         <Grid item xs={12}>
  //           <Stack
  //             direction="row"
  //             alignItems="center"
  //             spacing={2}
  //             sx={{ mb: 2 }}
  //           >
  //             <Avatar sx={{ bgcolor: 'secondary.main' }}>
  //               {user[0].toUpperCase()}
  //             </Avatar>
  //             <div>
  //               <div>{`Room: ${room}`}</div>
  //               <div>{`Participants: ${participants.join(', ')}`}</div>
  //             </div>
  //           </Stack>
  //         </Grid>
  //         <Grid item xs={12}>
  //           {messages.map((message, index) => (
  //             <Box
  //               key={index}
  //               sx={{
  //                 bgcolor: message.sender === user ? 'primary.main' : 'grey.300',
  //                 color: message.sender === user ? 'white' : 'black',
  //                 py: 1,
  //                 px: 2,
  //                 borderRadius: '16px',
  //                 maxWidth: '75%',
  //                 alignSelf: message.sender === user ? 'flex-end' : 'flex-start',
  //               }}
  //             >
  //               <div>
  //                 <strong>{message.sender}</strong>
  //               </div>
  //               <div>{message.text}</div>
  //             </Box>
  //           ))}
  //         </Grid>
  //         <Grid item xs={12}>
  //           <form onSubmit={sendMessage}>
  //             <Stack direction="row" alignItems="flex-end" spacing={2}>
  //                 <TextField
  //                 label="Type a message"
  //                 variant="outlined"
  //                 value={message}
  //                 onChange={(event) => setMessage(event.target.value)}
  //                 fullWidth
  //                 InputProps={{
  //                   endAdornment: (
  //                     <InputAdornment position="end">
  //                       <IconButton
  //                         aria-label="toggle password visibility"
  //                         onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
  //                       >
  //                         <MoodIcon />
  //                       </IconButton>
  //                     </InputAdornment>
  //                   ),
  //                 }}
  //               />
  //               <IconButton
  //                 aria-label="toggle password visibility"
  //                 onClick={() => setIsStickerPickerOpen(!isStickerPickerOpen)}
  //               >
  //                 <SentimentVerySatisfiedIcon />
  //               </IconButton>
  //               <Button type="submit" variant="contained" sx={{ ml: 1 }}>
  //                 Send
  //               </Button>
  //             </Stack>
  //           </form>
  //           {isEmojiPickerOpen && (
  //             <Picker
  //               onSelect={addEmoji}
  //               style={{ position: 'absolute', bottom: 80, right: 0 }}
  //             />
  //           )}
  //           {isStickerPickerOpen && (
  //             <StickerPicker
  //               onSelect={addSticker}
  //               style={{ position: 'absolute', bottom: 80, right: 0 }}
  //             />
  //           )}
  //         </Grid>
  //         {availableUsers.length > 0 && (
  //           <Grid item xs={12}>
  //             <Box>
  //               <div>Invite users to this chat:</div>
  //               {availableUsers.map((user) => (
  //                 <Button key={user} onClick={() => inviteUser(user)}>
  //                   {user}
  //                 </Button>
  //               ))}
  //             </Box>
  //           </Grid>
  //         )}
  //       </Grid>
  //     </Box>
  //   );
  };
  
  export default ChatRoom;
  
                 
  