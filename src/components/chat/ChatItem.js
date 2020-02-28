import React from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  admin: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary,
    textAlign: 'center',
  },
  user: {},
}));

const ChatItem = ({ message }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {!message && (
        <div className={classes.admin}>
          <Typography display="inline" color="inherit" variant="body1">
            대화가 없습니다.
          </Typography>
        </div>
      )}

      {message.messageType === 'admin' && (
        <div className={classes.admin}>
          <Typography display="inline" color="inherit" variant="body1">
            {message.message}
          </Typography>
        </div>
      )}
      {message.messageType === 'user' && (
        <div className={classes.user}>
          <Typography display="inline" color="primary" variant="h6">
            {message._sender.nickname}:
          </Typography>
          <Typography display="inline" color="inherit" variant="body1">
            {message.message}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default ChatItem;
