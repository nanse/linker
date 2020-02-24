import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelList from '../../components/channel/ChannelList';
import { listChannel, enter } from '../../modules/channel';

const ChannelListContainer = () => {
  const dispatch = useDispatch();

  // state
  const [mobileOpen, setMobileOpen] = useState(false);

  const { channels, error, loading } = useSelector(({ channel, loading }) => ({
    channels: channel.channels,
    error: channel.error,
    loading: loading['channel/LIST_CHANNEL'],
  }));
  useEffect(() => {
    dispatch(listChannel({ isInit: true }));
  }, [dispatch]);

  const handleEnterChannel = useCallback(
    url => {
      console.log('> handleEnterChannel: ', url);
      dispatch(enter(url));
    },
    [dispatch],
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ChannelList
      loading={loading}
      error={error}
      channels={channels}
      open={mobileOpen}
      onDrawerToggle={handleDrawerToggle}
      onEnterChannel={handleEnterChannel}
    />
  );
};

export default ChannelListContainer;
