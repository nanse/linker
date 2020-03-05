import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, IconButton } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import Parallax from '../Parallax/Parallax';

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
    textAlign: 'center',
  },
  desc: {
    fontSize: 30,
    fontWeight: 300,
    color: '#ffffff',
    lineHeight: 1.42,
    textAlign: 'center',
  },
  detail: {
    marginTop: theme.spacing(10),
    fontSize: 24,
    color: '#ffffff',
    lineHeight: 1.42,
    textAlign: 'center',
  },
  arrowIcon: {
    transform: 'rotate( 90deg )',
  },
  section: {
    height: '90vh',
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <>
      {/* 1페이지 */}
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
          spacing={3}
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
            <Typography className={classes.detail} variant="body1">
              자세히 보기
            </Typography>
            <Typography className={classes.desc} variant="body1">
              <IconButton>
                <DoubleArrowIcon
                  className={classes.arrowIcon}
                  fontSize="large"
                  style={{ fontSize: 60, color: '#fff' }}
                ></DoubleArrowIcon>
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Parallax>

      {/* 2페이지 */}
      <Parallax filter image={require('../../assets/img/welcome-bg2.png')}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.section}
        >
          <Grid item xs={12} sm={12} lg={12}>
            <Typography className={classes.subtitle} variant="h2">
              정보의 불균형을 해소하는 사람들
            </Typography>
            <Typography className={classes.desc} variant="body1">
              주식회사 링커는 Linker 서비스를 통해 멘토와 멘티를 연결하고 <br />
              서로에게 필요한 정보를 공유하는 플랫폼을 만드는 회사입니다.
              <br />
              입시과정의 정보 불균형을 해소하고자 큰 뜻을 품은 사람들이 모인
              회사 입니다.
            </Typography>
          </Grid>
        </Grid>
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
