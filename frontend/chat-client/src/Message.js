import React from 'react';
import './Message.css'; // Make sure to create this CSS file

const Message = ({ message, isOwnMessage }) => {
  return (
    <div className={`message ${isOwnMessage ? 'own-message' : ''}`}>
      <div className="message-bubble">
        {message}
      </div>
    </div>
  );
};

export default Message;
