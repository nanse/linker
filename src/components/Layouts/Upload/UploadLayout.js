import React, { useState } from 'react';
// @material-ui/core components
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

// core components
import ModalContainer from '../../../containers/modal/ModalContainer';

const UploadLayout = ({ children }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
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
      <main>{children}</main>
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
