import React from 'react';

const ChatItem = ({ message }) => {
  return (
    <h4 key={message.messageId}>
      <span>{message._sender.nickname}</span>: {message.message}
    </h4>
  );
};

export default ChatItem;
