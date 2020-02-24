import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from '../../components/Grid/GridContainer';
import ChatItem from '../../components/chat/ChatItem';

import { listMainMessage, listOtherMessage } from '../../modules/message';

import styles from '../../assets/jss/material-kit-react/container/chatContainerStyle';

const useStyles = makeStyles(styles);

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
      <GridContainer>
        <Grid item xs={12} sm={12} md={6}>
          <h3>Main</h3>
          {!mainLoading &&
            mainMessages.map(message => (
              <ChatItem key={message.messageId} message={message}></ChatItem>
            ))}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Divider />
          <h3>Other</h3>
          {!otherLoading &&
            otherMessages.map(message => (
              <ChatItem key={message.messageId} message={message}></ChatItem>
            ))}
        </Grid>
      </GridContainer>
    </div>
  );
};

export default ChatContainer;
