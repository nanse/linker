import React, { useState } from 'react';

import clsx from 'clsx';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
  colors,
  Divider,
  List,
  ListSubheader,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

// import styles from 'assets/jss/material-kit-react/components/channelListStyle.js';
import { MENTALK_TYPES } from '../../common/const';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    display: 'flex',
    padding: theme.spacing(2, 0),
    color: colors.blueGrey[800],
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const ChannelList = ({
  loading,
  error,
  channels,
  onEnterChannel,
  className,
  selectedItem,
  ...rest
}) => {
  // console.log('> ChannelList channels:', loading, channels);
  const classes = useStyles();
  return (
    <>
      {!loading &&
        channels &&
        MENTALK_TYPES.map(mentalkType => (
          <List
            {...rest}
            key={mentalkType.type}
            className={clsx(classes.root, className)}
            subheader={
              <ListSubheader component="div">{mentalkType.name}</ListSubheader>
            }
          >
            {channels
              .filter(x => x.customType === mentalkType.type)
              .map(channel => (
                <ListItem
                  button
                  key={channel.url}
                  className={clsx(classes.item)}
                  selected={selectedItem === channel.url}
                  onClick={() => onEnterChannel(channel.url)}
                >
                  <ListItemAvatar className={classes.icon}>
                    <Avatar alt={channel.name} src={channel.coverUrl} />
                  </ListItemAvatar>
                  {channel.name}
                </ListItem>
              ))}
            <Divider className={classes.divider} />
          </List>
        ))}
    </>
  );
};

export default ChannelList;
