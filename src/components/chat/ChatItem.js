import React from 'react';

const ChatItem = ({ message }) => {
  return <h4 key={message.messageId}>{message.message}</h4>;
};

export default ChatItem;
