import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Button, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    height: 80,
    [theme.breakpoints.down('md')]: {
      height: 60,
    },
  },
  logo: {
    marginLeft: theme.spacing(2),
    width: 110,
    height: 37,
  },
  toolbar: {
    minHeight: 80,
    [theme.breakpoints.down('md')]: {
      minHeight: 60,
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  buttonOutlined: {
    marginLeft: theme.spacing(1),
    color: '#fff',
  },
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/welcome">
          <img
            alt="Logo"
            className={classes.logo}
            src={require('../../../../assets/img/logo.png')}
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/register"
          >
            회원가입
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.buttonOutlined}
            href="/login"
          >
            로그인
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
};

export default Topbar;
