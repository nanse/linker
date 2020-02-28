import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Divider,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ChatItem from '../../components/chat/ChatItem';

import { listMainMessage, listOtherMessage } from '../../modules/message';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  chatMain: {
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
          <Card className={classes.chatMain}>
            <CardHeader
              subheader="멘토와 질문을 주고 받을수 있습니다."
              title="멘토톡"
            />
            <Divider />
            <CardContent className={classes.chatBody}>
              {!mainLoading &&
                mainMessages.map(message => (
                  <ChatItem
                    key={message.messageId}
                    message={message}
                  ></ChatItem>
                ))}
            </CardContent>
            <CardActions className={classes.chatInput}>
              <Button color="primary" variant="outlined">
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <Card className={classes.chatMain}>
            <CardHeader
              subheader="이곳에서 자유롭게 대화를 나눌수 있습니다."
              title="눈팅톡"
            />
            <Divider />
            <CardContent className={classes.chatBody}>
              {!otherLoading &&
                otherMessages.map(message => (
                  <ChatItem
                    key={message.messageId}
                    message={message}
                  ></ChatItem>
                ))}
            </CardContent>
            <CardActions className={classes.chatInput}>
              <Button color="primary" variant="outlined">
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatContainer;
