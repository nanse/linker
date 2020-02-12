import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChannelList from '../../components/channel/ChannelList';
import { listChannels } from '../../modules/channel';

const ChannelListContainer = () => {
  const dispatch = useDispatch();
  const { channels, error, loading } = useSelector(({ channel, loading }) => ({
    channels: channel.channels,
    error: channel.error,
    loading: loading['channel/LIST_CHANNEL'],
  }));
  useEffect(() => {
    dispatch(listChannels({ isInit: true }));
  }, [dispatch]);

  return <ChannelList loading={loading} error={error} channels={channels} />;
};

export default ChannelListContainer;
