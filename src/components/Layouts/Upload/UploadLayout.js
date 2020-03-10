import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import Topbar from './components/Topbar';

// core components
import ModalContainer from '../../../containers/modal/ModalContainer';
import Parallax from '../../Parallax/Parallax';
import Footer from '../../Footer/Footer';
import ScrollToTop from '../../common/ScrollToTop';
const useStyles = makeStyles(theme => ({
  content: {
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    marginTop: 64,
    [theme.breakpoints.down('md')]: {
      marginTop: 56,
    },
    '&:after': {
      display: 'block',
      clear: 'both',
      content: ' ',
    },
  },
}));

const UploadLayout = ({ children, isParallax = true }) => {
  const classes = useStyles();

  return (
    <ScrollToTop>
      <Topbar color="primary" />
      <main className={classes.content}>
        {isParallax && (
          <Parallax image={require('../../../assets/img/welcome-bg1.jpg')}>
            {children}
          </Parallax>
        )}

        {!isParallax && children}
      </main>
      <Footer></Footer>
      <ModalContainer></ModalContainer>
    </ScrollToTop>
  );
};

export default UploadLayout;
