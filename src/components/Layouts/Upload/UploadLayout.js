import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import Topbar from './components/Topbar';

// core components
import ModalContainer from '../../../containers/modal/ModalContainer';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: 64,
    [theme.breakpoints.down('md')]: {
      marginTop: 56,
    },
  },
}));

const UploadLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Topbar color="primary" />
      <main className={classes.content}>{children}</main>
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default UploadLayout;
