import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  logo: {
    width: 70,
    height: 23,
  },
  flexGrow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
  buttonOutlined: {
    color: '#fff',
  },
  loginIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const Topbar = props => {
  const { className, ...rest } = props;
  const [isLogin, setIsLogin] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    try {
      const auth = sessionStorage.getItem('auth');
      if (auth) {
        setIsLogin(true);
      }
    } catch (error) {
      console.log('sessionStorage not support..');
    }
  }, []);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            className={classes.logo}
            src={require('../../../../assets/img/logo.png')}
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          className={clsx(classes.buttonOutlined)}
          href="/guide"
        >
          이벤트 참여방법
        </Button>
        {isLogin ? (
          <>
            <IconButton href="upload">
              <CloudUploadIcon style={{ color: '#fff' }}></CloudUploadIcon>
            </IconButton>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
              href="/register"
            >
              회원가입
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              className={clsx(classes.button, classes.buttonOutlined)}
              href="/login"
            >
              로그인
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
