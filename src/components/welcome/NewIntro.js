import React from 'react';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(theme => ({
  img: {
    height: 'auto',
    width: '100%',
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: '#2a2a2a' }}>
      <img src="/img/main-mobile.jpg" className={classes.img} alt="main"></img>
    </div>
  );
}
