import React, { useState, useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import Message from './Message';
import MessageInput from './MessageInput';
import './Chat.css'; // Ensure this path is correct

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [contact] = useState({ name: 'Ankit Kumar singh', avatar: '/path/to/avatar.jpg' });
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onmessage = (event) => {
      console.log('Received message:', event.data);
      setMessages((prevMessages) => [...prevMessages, { text: event.data, isOwn: false }]);
    };

    ws.current.onopen = () => {
      console.log('WebSocket connection established');
    };

    ws.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const handleSendMessage = (message) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message);
      setMessages((prevMessages) => [...prevMessages, { text: message, isOwn: true }]);
    } else {
      console.log('WebSocket is not open.');
    }
  };

  return (
    <div className="chat">
      <ChatHeader contact={contact} />
      <div className="message-list">
        {messages.map((msg, index) => (
          <Message key={index} message={msg.text} isOwnMessage={msg.isOwn} />
        ))}
      </div>
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default Chat;
