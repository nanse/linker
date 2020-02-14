import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';

import { listMainMessage, listOtherMessage } from '../../modules/message';

const ChatContainer = () => {
  const dispatch = useDispatch();
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
    dispatch(listMainMessage({ channel, isInit: true }));
    dispatch(listOtherMessage({ channel, isInit: true }));
  }, [channel, dispatch]);

  return (
    <GridContainer>
      <Grid item xs={12} sm={12} md={6}>
        {!mainLoading &&
          mainMessages.map(message => (
            <h4 key={message.messageId}>{message.message}</h4>
          ))}
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        {!otherLoading &&
          otherMessages.map(message => (
            <h4 key={message.messageId}>{message.message}</h4>
          ))}
      </Grid>
    </GridContainer>
  );
};

export default ChatContainer;
