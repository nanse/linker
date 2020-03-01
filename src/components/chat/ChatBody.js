import React, { useState, useEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  CardActions,
  Paper,
  IconButton,
  InputBase,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { makeStyles } from '@material-ui/core/styles';

import ChatItem from './ChatItem';
import { sendMessage } from '../../modules/message';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chatBody: {
    padding: theme.spacing(4, 0),
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    maxHeight: 'calc(100vh - 300px)',
    overflowY: 'auto',
    overflowX: 'hidden',
  },

  rootInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const ChatBody = ({ title = '', subheader = '', messages }) => {
  const classes = useStyles();
  const messagesEndRef = createRef(null);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { channel, loading } = useSelector(({ channel, loading }) => ({
    channel: channel.channel,
    loading: loading['message/SEND_MESSAGE'],
  }));

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    console.log('submit ok', channel, text);
    e.preventDefault();
    dispatch(sendMessage({ channel, message: text }));
  };
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  const renderMessage = () => {
    return (
      <>
        {messages.map(message => (
          <ChatItem key={message.messageId} message={message}></ChatItem>
        ))}
      </>
    );
  };

  // 스크롤 하단 처리
  useEffect(scrollToBottom, [messages]);

  return (
    <Card className={classes.root}>
      <CardHeader subheader={subheader} title={title} />
      <Divider />
      <CardContent className={classes.chatBody}>
        {renderMessage()}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardActions className={classes.chatInput}>
        <Paper
          component="form"
          className={classes.rootInput}
          onSubmit={handleSubmit}
        >
          <IconButton className={classes.iconButton} aria-label="attach file">
            <AttachFileIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="입력 하세요"
            inputProps={{ 'aria-label': '입력 하세요' }}
            onChange={handleChange}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="send"
          >
            <SendIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
        </Paper>
      </CardActions>
    </Card>
  );
};

export default ChatBody;
