import React from 'react';

// @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

// import styles from 'assets/jss/material-kit-react/components/channelListStyle.js';
import { MENTALK_TYPES } from '../../common/const';

// const useStyles = makeStyles(styles);

const ChannelItem = ({ channel, onEnterChannel }) => {
  const { url, name, coverUrl } = channel;
  return (
    <ListItem button onClick={() => onEnterChannel(url)}>
      <ListItemAvatar>
        <Avatar alt={name} src={coverUrl} />
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

const ChannelList = ({ channels, loading, onEnterChannel }) => {
  // console.log('> ChannelList channels:', loading, channels);
  return (
    <>
      {!loading && channels && (
        <div>
          {MENTALK_TYPES.map(mentalkType => (
            <List
              key={mentalkType.type}
              subheader={
                <ListSubheader component="div">
                  {mentalkType.name}
                </ListSubheader>
              }
            >
              {channels
                .filter(x => x.customType === mentalkType.type)
                .map(channel => (
                  <ChannelItem
                    key={channel.url}
                    channel={channel}
                    onEnterChannel={onEnterChannel}
                  ></ChannelItem>
                ))}
              <Divider></Divider>
            </List>
          ))}
        </div>
      )}
    </>
  );
};

export default ChannelList;
