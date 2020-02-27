import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
} from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

// import Profile from '../../components/Layouts/components/Profile';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 310,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));
const RightbarContainer = ({ open, variant, onClose, className, ...rest }) => {
  const classes = useStyles();
  const pages = [
    {
      title: '자소서는 어떻게 작성해요?',
      icon: <ContactSupportIcon />,
    },
    {
      title: 'sky는 어떻게 가나요?',
    },
  ];

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <List
          {...rest}
          className={clsx(classes.root, className)}
          subheader={<ListSubheader component="div">질문 리스트</ListSubheader>}
        >
          {pages.map(page => (
            <ListItem
              button
              className={classes.item}
              disableGutters
              key={page.title}
            >
              <ListItemIcon>
                <ContactSupportIcon />
              </ListItemIcon>
              {page.title}
            </ListItem>
          ))}
          <Divider className={classes.divider} />
        </List>
      </div>
    </Drawer>
  );
};

export default RightbarContainer;
