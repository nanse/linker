import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import ChannelList from '../../components/channel/ChannelList';
import { listChannels } from '../../modules/channel';

const ChannelListContainer = () => {
  const dispatch = useDispatch();
  const { channels, error, loading } = useSelector(
    ({ openChannels, loading, user }) => ({
      openChannels: openChannels.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    dispatch(listChannels());
  }, [dispatch]);

  return (
    <ChannelList loading={loading} error={error} openChannels={openChannels} />
  );
};

export default ChannelListContainer;
