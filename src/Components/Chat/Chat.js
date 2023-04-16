// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import IconButton from '@mui/material/IconButton';
// import AttachFileIcon from '@mui/icons-material/AttachFile';

// const ChatRoom = ({ user, room }) => {
//   const [socket, setSocket] = useState(null);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [participants, setParticipants] = useState([]);
//   const [availableUsers, setAvailableUsers] = useState([]);

//   useEffect(() => {
//     const newSocket = io('http://localhost:5000', { transports: ['websocket'] });
//     setSocket(newSocket);

//     newSocket.emit('join', {
//         username: user,
//         room: room,
//       });
  
//       newSocket.on('participants', (data) => {
//         setParticipants(data.participants);
//       });
  
//       newSocket.on('availableUsers', (data) => {
//         setAvailableUsers(data.availableUsers);
//       });
  
//       newSocket.on('message', (data) => {
//         setMessages((prevMessages) => [...prevMessages, data]);
//       });
  
//       newSocket.on('inviteUser', (data) => {
//         if (data.room === room) {
//           setAvailableUsers([]);
//         }
//       });
  
//       return () => {
//         newSocket.emit('leave', {
//           username: user,
//           room: room,
//         });
//         newSocket.disconnect();
//       };
//     }, [user, room]);
  
//     const sendMessage = (event) => {
//       event.preventDefault();
//       if (message) {
//         socket.emit('message', {
//           sender: user,
//           message: message,
//           room: room,
//         });
//         setMessage('');
//       }
//     };
  
//     const inviteUser = (user) => {
//       socket.emit('inviteUser', {
//         username: user,
//         room: room,
//       });
//     };
  
//     const handleFileUpload = (event) => {
//       // handle file upload
//     };
  
//     return (
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <Stack
//               direction="row"
//               alignItems="center"
//               spacing={2}
//               sx={{ mb: 2 }}
//             >
//               <Avatar sx={{ bgcolor: 'secondary.main' }}>
//                 {user[0].toUpperCase()}
//               </Avatar>
//               <div>
//                 <div>{`Room: ${room}`}</div>
//                 <div>{`Participants: ${participants.join(', ')}`}</div>
//               </div>
//             </Stack>
//           </Grid>
//           <Grid item xs={12}>
//             {messages.map((message, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   bgcolor: message.sender === user ? 'primary.main' : 'grey.300',
//                   color: message.sender === user ? 'white' : 'black',
//                   py: 1,
//                   px: 2,
//                   borderRadius: '16px',
//                   maxWidth: '75%',
//                   alignSelf: message.sender === user ? 'flex-end' : 'flex-start',
//                 }}
//               >
//                 <div>
//                   <strong>{message.sender}</strong>
//                 </div>
//                 <div>{message.text}</div>
//               </Box>
//             ))}
//           </Grid>
//           <Grid item xs={12}>
//             <form onSubmit={sendMessage}>
//               <Stack direction="row" alignItems="flex-end" spacing={2}>
//                 <TextField
//                   label="Type a message"
//                   variant="outlined"
//                   value={message}
//                   onChange={(event) => setMessage(event.target.value)}
//                   fullWidth
//                 />
//                 <IconButton component="label">
//                   <AttachFileIcon />
//                   <input
//                     type="file"
//                     hidden
//                     onChange={handleFileUpload}
//                   />
//                 </IconButton>
//                 <Button type="submit" variant="contained">
//                   Send
//                 </Button>
//               </Stack>
//             </form>
//           </Grid>
//           {availableUsers.length > 0 && (
//             <Grid item xs={12}>
//               <Box>
//                 <div>Invite users to this chat:</div>
//                 {availableUsers.map((user) => (
//                   <Button key={user} onClick={() => inviteUser(user)}>
//                     {user}
//                   </Button>
//                 ))}
//               </Box>
//             </Grid>
//           )}
//         </Grid>
//       </Box>

//     //   const sendFile = async (file) => {
//     //     const formData = new FormData();
//     //     formData.append('file', file);
//     //     formData.append('sender', username);
//     //     formData.append('room', currentRoom);

//     //     try {
//     //         const response = await axios.post('/upload', formData);
//     //         const { url } = response.data;
//     //         socket.emit('message', {
//     //         message: url,
//     //         sender: username,
//     //         room: currentRoom,
//     //         });
//     //     } catch (error) {
//     //         console.error(error);
//     //     }
//     //  };
//     // )   
