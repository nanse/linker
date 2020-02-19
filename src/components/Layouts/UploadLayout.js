import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// core components
import Footer from '../Footer/Footer.js';
import ModalContainer from '../../containers/modal/ModalContainer';

import styles from '../../assets/jss/material-kit-react/layouts/uploadLayout.js';
import image from 'assets/img/bg7.jpg';

const useStyles = makeStyles(styles);

const UploadLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color={'primary'}>
        <Toolbar variant="dense">
          <Typography variant="h5">Linker</Typography>
        </Toolbar>
      </AppBar>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>{children}</div>
        <Footer whiteFont />
      </div>
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default UploadLayout;
