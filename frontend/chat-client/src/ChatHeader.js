import React from 'react';
import './ChatHeader.css'; // Make sure to create this CSS file
import avatarimage from "./assists/ironMan.png"

const ChatHeader = ({ contact }) => {
  return (
    <div className="chat-header">
      <div className="contact-info">
        <img src={avatarimage} alt={contact.name} className="avatar" />
        <h2 className="contact-name">{contact.name}</h2>
      </div>
      <div className="status">Online</div>
    </div>
  );
};

export default ChatHeader;
