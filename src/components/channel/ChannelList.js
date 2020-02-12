import React from 'react';
import PropTypes from 'prop-types';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

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

const ChannelItem = ({ channel }) => {
  const { name, coverUrl } = channel;
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar alt={name} src={coverUrl} />
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

const ChannelList = props => {
  const { channels, loading } = props;

  console.log('> ChannelList channels:', loading);
  return (
    <>
      {channels && (
        <div>
          {MENTALK_TYPES.map((mentalkType, index) => (
            <>
              <List
                subheader={
                  <ListSubheader component="div">
                    {mentalkType.name}
                  </ListSubheader>
                }
                key={index}
              >
                {channels
                  .filter(x => x.customType === mentalkType.type)
                  .map(channel => (
                    <ChannelItem
                      key={channel.url}
                      channel={channel}
                    ></ChannelItem>
                  ))}
              </List>
              <Divider />
            </>
          ))}
        </div>
      )}
    </>
  );
};

ChannelList.defaultProps = {
  channels: [],
};

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
};

export default ChannelList;
