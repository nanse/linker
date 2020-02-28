import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Helmet } from 'react-helmet-async';
import { SendBirdAction } from '../lib/Sendbird/SendBirdAction';
import { SendBirdConnection } from '../lib/Sendbird/SendBirdConnection';

// layout
import ChatLayout from '../components/Layouts/ChatLayout';
import ChatContainer from '../containers/chat/ChatContainer';
import { changeConnection } from '../modules/sendbird';

import {
  getVariableFromUrl,
  isEmpty,
  redirectToIndex,
} from '../lib/Sendbird/utils';

const sb = new SendBirdAction();

const ChatPage = () => {
  const dispatch = useDispatch();
  const { channel } = useSelector(state => state.channel);

  const handleConnection = isConnection =>
    dispatch(changeConnection(isConnection));

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
        handleConnection(true);
        createConnectionHandler();
      })
      .catch(e => {
        console.error(e);
        handleConnection(false);
        // redirectToIndex("SendBird connection failed.");
      });
  }, [handleConnection]);

  return (
    <>
      <Helmet>
        <title>Chat - Linker</title>
      </Helmet>
      <ChatLayout>{channel && <ChatContainer></ChatContainer>}</ChatLayout>
    </>
  );
};

export default ChatPage;
