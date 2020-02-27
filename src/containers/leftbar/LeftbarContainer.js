import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Divider } from '@material-ui/core';
import ChannelList from '../../components/channel/ChannelList';
import Profile from '../../components/Layouts/components/Profile';
import { listChannel, enter } from '../../modules/channel';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 310,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const LeftbarContainer = ({ open, variant, onClose, className, ...rest }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { channels, error, loading } = useSelector(({ channel, loading }) => ({
    channels: channel.channels,
    error: channel.error,
    loading: loading['channel/LIST_CHANNEL'],
  }));
  useEffect(() => {
    dispatch(listChannel({ isInit: true }));
  }, [dispatch]);

  const handleEnterChannel = useCallback(
    (url, index) => {
      console.log('> handleEnterChannel: ', url);
      setSelectedIndex(index);
      dispatch(enter(url));
    },
    [dispatch],
  );

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <ChannelList
          loading={loading}
          error={error}
          channels={channels}
          onEnterChannel={handleEnterChannel}
          selectedIndex={selectedIndex}
          className={classes.nav}
        />
      </div>
    </Drawer>
  );
};

export default LeftbarContainer;
