import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundColor: '#2a2a2a',
    textAlign: 'center',
  },
  img: {
    height: 'auto',
    width: '100%',
    maxWidth: '1900px',
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <img src="/img/main-pc.jpg" className={classes.img} alt="main"></img>
    </div>
  );
};

export default Intro;
