import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import LeftbarContainer from '../../containers/leftbar/LeftbarContainer';
import RightbarContainer from '../../containers/rightbar/RightbarContainer';

import Topbar from './components/Topbar';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 64,
    height: '100%',
    [theme.breakpoints.up('md')]: {
      paddingTop: 64,
    },
  },
  shiftContent: {
    paddingLeft: 310,
  },
  content: {
    height: '100%',
  },
}));

const Main = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openLeftbar, setOpenLeftbar] = useState(false);
  const [openRightbar, setOpenRightbar] = useState(false);

  const handleLeftbarOpen = () => {
    setOpenLeftbar(true);
  };

  const handleLeftbarClose = () => {
    setOpenLeftbar(false);
  };

  const handleRightbarOpen = () => {
    setOpenRightbar(true);
  };

  const handleRightbarClose = () => {
    setOpenRightbar(false);
  };

  const shouldOpenLeftbar = isDesktop ? true : openLeftbar;
  const shouldOpenRightbar = openRightbar;

  // sendbird connection
  const { isConnection } = useSelector(({ sendbird }) => ({
    isConnection: sendbird.isConnection,
  }));

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar
        onLeftbarOpen={handleLeftbarOpen}
        onRightbarOpen={handleRightbarOpen}
      />
      {/* <Sidebar
        onClose={handleLeftbarClose}
        open={shouldOpenLeftbar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      /> */}
      {isConnection && (
        <LeftbarContainer
          onClose={handleLeftbarClose}
          open={shouldOpenLeftbar}
          variant={isDesktop ? 'persistent' : 'temporary'}
        ></LeftbarContainer>
      )}
      {isConnection && (
        <RightbarContainer
          onClose={handleRightbarClose}
          open={shouldOpenRightbar}
          variant={'temporary'}
        ></RightbarContainer>
      )}
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
