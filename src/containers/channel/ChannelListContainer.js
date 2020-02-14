import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelList from '../../components/channel/ChannelList';
import { listChannel, enter } from '../../modules/channel';

const ChannelListContainer = () => {
  const dispatch = useDispatch();
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

  return (
    <ChannelList
      loading={loading}
      error={error}
      channels={channels}
      onEnterChannel={handleEnterChannel}
    />
  );
};

export default ChannelListContainer;
