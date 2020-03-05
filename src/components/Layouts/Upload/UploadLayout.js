import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

// core components
import ModalContainer from '../../../containers/modal/ModalContainer';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: 80,
    [theme.breakpoints.down('md')]: {
      marginTop: 60,
    },
  },
}));

const UploadLayout = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? false : openSidebar;

  return (
    <div>
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        color="primary"
        isDesktop={isDesktop}
      />
      <main className={classes.content}>{children}</main>
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default UploadLayout;
