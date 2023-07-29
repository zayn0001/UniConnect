import React from 'react';
import PropTypes from 'prop-types';

const ChatLayout = ({ messages }) => {
  return (
    <div className="chat-layout">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          <div className="message-content">{message.content}</div>
          <div className="message-time">{message.time}</div>
        </div>
      ))}
    </div>
  );
};

ChatLayout.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['sent', 'received']).isRequired,
      content: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatLayout;