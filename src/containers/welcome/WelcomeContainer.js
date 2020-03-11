import React from 'react';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import Intro from '../../components/welcome/Intro';
import NewIntro from '../../components/welcome/NewIntro';

const WelcomeContainer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  return <>{isDesktop ? <Intro></Intro> : <NewIntro></NewIntro>}</>;
};

export default WelcomeContainer;
