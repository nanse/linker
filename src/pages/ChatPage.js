import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Drawer } from '@material-ui/core';
import ChannelListContainer from '../containers/channel/ChannelListContainer';
import ChatContainer from '../containers/chat/ChatContainer';
import { SendBirdAction } from '../lib/Sendbird/SendBirdAction';
import { SendBirdConnection } from '../lib/Sendbird/SendBirdConnection';

import {
  getVariableFromUrl,
  isEmpty,
  redirectToIndex,
} from '../lib/Sendbird/utils';

const sb = new SendBirdAction();

const PostPage = () => {
  const [isConnection, setIsConnection] = useState(false);

  const { channel } = useSelector(state => state.channel);
  const createConnectionHandler = () => {
    const connectionManager = new SendBirdConnection();
    connectionManager.onReconnectStarted = () => {
      console.log('[SendBird JS SDK] Reconnect : Started');
    };
    connectionManager.onReconnectSucceeded = () => {
      console.log('[SendBird JS SDK] Reconnect : Succeeded');
    };
    connectionManager.onReconnectFailed = () => {
      console.log('[SendBird JS SDK] Reconnect : Failed');
      connectionManager.remove();
      redirectToIndex('SendBird Reconnect Failed...');
    };
  };

  useEffect(() => {
    const { userid, accesstoken } = getVariableFromUrl();
    if (isEmpty(userid)) {
      redirectToIndex('UserID must be required.');
    }
    sb.connect(userid, accesstoken)
      .then(user => {
        console.log('> user: ', user);
        setIsConnection(true);
        createConnectionHandler();
      })
      .catch(e => {
        console.error(e);
        // redirectToIndex("SendBird connection failed.");
      });
  }, []);
  return (
    <>
      <Drawer variant={'persistent'} open>
        {isConnection && <ChannelListContainer></ChannelListContainer>}
      </Drawer>
      {channel && <ChatContainer></ChatContainer>}
    </>
  );
};

export default PostPage;
