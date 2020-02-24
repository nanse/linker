import React, { useState, useEffect, createRef } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import ChannelListContainer from '../containers/channel/ChannelListContainer';
import ChatContainer from '../containers/chat/ChatContainer';
import { SendBirdAction } from '../lib/Sendbird/SendBirdAction';
import { SendBirdConnection } from '../lib/Sendbird/SendBirdConnection';

// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

import {
  getVariableFromUrl,
  isEmpty,
  redirectToIndex,
} from '../lib/Sendbird/utils';

import styles from '../assets/jss/material-kit-react/pages/chatPageStyle';

const sb = new SendBirdAction();
const useStyles = makeStyles(styles);
let ps;

const PostPage = () => {
  // styles
  const classes = useStyles();

  // ref
  const mainPanel = createRef();

  // state
  const [isConnection, setIsConnection] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Scroll Handler
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);
  return (
    <>
      {isConnection && <ChannelListContainer></ChannelListContainer>}
      <div className={classes.root} ref={mainPanel}>
        {channel && <ChatContainer></ChatContainer>}
      </div>
    </>
  );
};

export default PostPage;
