import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import ChatBody from '../../components/chat/ChatBody';

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
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          {!mainLoading && (
            <ChatBody
              title={'멘토톡'}
              subheader={'멘토와 질문을 주고 받을수 있습니다.'}
              messages={mainMessages}
            ></ChatBody>
          )}
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          {!otherLoading && (
            <ChatBody
              title={'눈팅톡'}
              subheader={'이곳에서 자유롭게 대화를 나눌수 있습니다.'}
              messages={otherMessages}
            ></ChatBody>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatContainer;
