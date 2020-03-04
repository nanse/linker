import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import Parallax from '../Parallax/Parallax';
import Linker from '../../icons/Linker';

const useStyles = makeStyles(theme => ({
  box: {
    margin: theme.spacing(9, 13),
    padding: theme.spacing(7, 5),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3),
    },
    width: 289,
    height: 289,
    boxShadow: '0 0 3px 0 #050505',
    backgroundColor: 'rgba(65, 105, 225, 0.28)',
  },
  slogan: {
    textShadow: '0px 1px 7px rgba(0, 0, 0, 0.34)',
    // fontFamily: 'NanumSquareB',
    fontSize: 51.5,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.23,
    letterSpacing: 'normal',
    color: '#ffffff',
    opacity: 1,
  },
  subLogo: {
    flexBasis: 'auto',
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    fontSize: 60,
    fontWeight: 300,
    color: '#ffffff',
    lineHeight: 1.42,
  },
  desc: {
    fontSize: 30,
    fontWeight: 300,
    color: '#ffffff',
    lineHeight: 1.42,
    textAlign: 'center',
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <>
      <Parallax filter image={require('../../assets/img/welcome-bg1.png')}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} lg={6}>
            <div className={classes.box}>
              <div></div>
              <Typography className={classes.slogan} variant="h1">
                입시의 모든것을 해결하다
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <div className={classes.subLogo}></div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} lg={12}>
            <Typography className={classes.subtitle} variant="h2">
              당신의 <strong>대학</strong>을 가고자 하는 <strong>멘티</strong>를
              만나 주세요
            </Typography>
            <Typography className={classes.desc} variant="body1">
              주식회사 <strong>Linker</strong>에서 멘토링/과외 활동에 참여할
              20학번 신입생, 19학번 재학생을 찾습니다!
            </Typography>
            <Typography className={classes.desc} variant="body1">
              입시최강 서비스 링커에서 멘토분들을 사전 등록하는 행사를
              진행합니다.
            </Typography>
          </Grid>
        </Grid>
      </Parallax>
      <Parallax filter image={require('../../assets/img/welcome-bg2.png')}>
        hello
      </Parallax>
      <Parallax filter image={require('../../assets/img/welcome-bg3.png')}>
        hello
      </Parallax>
      <Parallax filter image={require('../../assets/img/welcome-bg4.png')}>
        hello
      </Parallax>
      <Parallax filter image={require('../../assets/img/welcome-bg5.png')}>
        hello
      </Parallax>
    </>
  );
};

export default Intro;
