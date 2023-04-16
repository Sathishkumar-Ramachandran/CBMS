import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import '../styles/chat.css'
const socket = io('http://localhost:3001', { transports: ['websocket'], cors: { origin: 'http://localhost:3000' } });// Replace with your server URL

const Chat = ({ senderId, receiverId, receiverName, onClose }) => {
  const [messageContent, setMessageContent] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const chatContainerRef = useRef(null);

  // Listen for new chat messages and update chat history
  useEffect(() => {
    socket.on('chat_message', (data) => {
      setChatHistory((chatHistory) => [...chatHistory, data]);
    });
  }, []);

  // Scroll to bottom of chat container whenever chat history updates
  useEffect(() => {
    // chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    socket.on("message-sent", (messageContent1) => {
      console.log(messageContent1);
      setChatHistory((chatHistory) => [...chatHistory, {messageContent: messageContent1}]);
    })
    return () => {
      socket.off('message-sent');
      };
  }, []);

  // Send a chat message to the server
  const sendMessage = (event) => {
    event.preventDefault();

    const message = {
      senderId: senderId,
      receiverId: receiverId,
      messageContent: messageContent,
      sentTime: new Date().toISOString(),
    };

    socket.emit('send-message', message);


    // setChatHistory((chatHistory) => [...chatHistory, message]);
    
    setMessageContent('');
  };

  return (
    <div className='chat'>
      <h1>{receiverName}</h1>
      <button onClick={onClose}>Close Chat</button>
      <div ref={chatContainerRef} style={{ height: '300px', overflowY: 'scroll' }}>
        {chatHistory.map((message, index) => {
          const sender = message.senderId === senderId ? 'You' : receiverName;
          return (
            <div key={index}>
              <p>
                <strong>{sender}: </strong>
                {message.messageContent}
              </p>
              <p>{message.sentTime}</p>
            </div>
          );
        })}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={messageContent}
          onChange={(event) => setMessageContent(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
    }


export default Chat;
