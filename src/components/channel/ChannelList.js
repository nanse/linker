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

ChannelList.defaultProps = {
  openChannels: [],
};

ChannelList.propTypes = {
  openChannels: PropTypes.array.isRequired,
};

function ChannelList(props) {
  // const classes = useStyles();

  console.log('ChannelList start');

  const { openChannels } = props;
  return (
    <div className={'root'}>
      {MENTALK_TYPES.map((mentalkType, index) => (
        <>
          <List
            subheader={
              <ListSubheader component="div">{mentalkType.name}</ListSubheader>
            }
            key={index}
          >
            {openChannels
              .filter(x => x.customType === mentalkType.type)
              .map(channel => (
                <ListItem button key={channel.url}>
                  <ListItemAvatar>
                    <Avatar alt={channel.name} src={channel.coverUrl} />
                  </ListItemAvatar>
                  <ListItemText primary={channel.name} />
                </ListItem>
              ))}
          </List>
          <Divider />
        </>
      ))}
    </div>
  );
}

export default ChannelList;
