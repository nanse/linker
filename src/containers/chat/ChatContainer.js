import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatItem from '../../components/chat/ChatItem';

import { listMainMessage, listOtherMessage } from '../../modules/message';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const ChatContainer = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const {
    channel,
    mainMessages,
    otherMessages,
    error,
    mainLoading,
    otherLoading,
  } = useSelector(({ channel, message, loading }) => ({
    channel: channel.channel,
    mainMessages: message.mainMessages,
    otherMessages: message.otherMessages,
    error: message.error,
    mainLoading: loading['message/LIST_MAIN_MESSAGE'],
    otherLoading: loading['message/LIST_OTHER_MESSAGE'],
  }));
  useEffect(() => {
    console.log('> chat container:', channel);
    dispatch(listMainMessage({ channel, isInit: true }));
    dispatch(listOtherMessage({ channel, isInit: true }));
  }, [channel, dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <h3>Main</h3>
          {!mainLoading &&
            mainMessages.map(message => (
              <ChatItem key={message.messageId} message={message}></ChatItem>
            ))}
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Divider />
          <h3>Other</h3>
          {!otherLoading &&
            otherMessages.map(message => (
              <ChatItem key={message.messageId} message={message}></ChatItem>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatContainer;
