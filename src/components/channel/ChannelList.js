import React from 'react';

// @material-ui/core components
// import { makeStyles } from '@material-ui/core/styles';
import {
  Hidden,
  Drawer,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

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

const channelRender = (channels, onEnterChannel) => (
  <>
    {MENTALK_TYPES.map(mentalkType => (
      <List
        key={mentalkType.type}
        subheader={
          <ListSubheader component="div">{mentalkType.name}</ListSubheader>
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
  </>
);

const ChannelList = ({
  channels,
  loading,
  onEnterChannel,
  open,
  onDrawerToggle,
}) => {
  // console.log('> ChannelList channels:', loading, channels);
  return (
    <>
      {!loading && channels && (
        <div>
          <Hidden mdUp implementation="css">
            <Drawer
              variant="temporary"
              open={open}
              onClose={onDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {channelRender(channels, onEnterChannel)}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer variant="permanent" open>
              {channelRender(channels, onEnterChannel)}
            </Drawer>
          </Hidden>
        </div>
      )}
    </>
  );
};

export default ChannelList;
