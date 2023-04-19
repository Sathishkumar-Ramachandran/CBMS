import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Handle incoming chat messages
    socket.on('new-message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    // Load chat history on initial load
    socket.on('chat-history', (history) => {
      setMessages(history);
    });
  }, []);

  const handleNewMessage = (event) => {
    event.preventDefault();
    socket.emit('new-message', {
      content: newMessage,
      sender: 'me',
      timestamp: Date.now(),
    });
    setNewMessage('');
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.sender}: {message.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleNewMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
