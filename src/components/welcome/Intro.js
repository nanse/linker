import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import Parallax from '../Parallax/Parallax';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0, 3),
  },
  box: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(3, 2),
    boxShadow: '0 0 3px 0 #050505',
    backgroundColor: 'rgba(65, 105, 225, 0.28)',
    textAlign: 'center',
    wordBreak: 'normal',
  },
  title: {
    margin: '1.75rem 0 0.875rem',
    textDecoration: 'none',
    fontWeight: '700',
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  section: {
    height: '90hv',
  },
  slogan: {
    textShadow: '0px 1px 7px rgba(0, 0, 0, 0.34)',
    // fontFamily: 'NanumSquareB',
    fontSize: 24,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.23,
    letterSpacing: 'normal',
    color: '#ffffff',
    opacity: 1,
  },
  head: {
    fontSize: 30,
    color: '#fff',
    '&:before': {
      width: 5,
      background: '#fff',
    },
  },

  subtitle: {
    marginTop: theme.spacing(3),
    lineHeight: 1.5,
  },
  subtitle2: {
    marginTop: theme.spacing(25),
  },
  subtitle3: {
    marginTop: theme.spacing(10),
  },
  subtitle4: {
    marginTop: theme.spacing(5),
  },
  desc: {
    lineHeight: 1.5,
  },
  goDetail: {
    position: 'absolute',
    left: 'calc(50% - 40px)',
    bottom: theme.spacing(12),
  },
  arrowIcon: {
    transform: 'rotate( 90deg )',
  },
  img: {
    height: 'auto',
    width: '100%',
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <>
      {/* 1페이지 */}
      <Parallax filter image={require('../../assets/img/welcome-bg1.jpg')}>
        <Grid container className={classes.container}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography variant="h1" className={classes.title}>
              입시의 <br></br>모든 것을 해결하다
            </Typography>
          </Grid>
        </Grid>
      </Parallax>

      {/* 2페이지 */}
      <Parallax filter image={require('../../assets/img/welcome-bg2.jpg')}>
        <div className={classes.container}>
          <img
            src="/img/home/section-02.png"
            className={classes.img}
            alt="step1"
          />
        </div>
      </Parallax>

      {/* 3페이지 */}
      <Parallax filter image={require('../../assets/img/welcome-bg3.jpg')}>
        <div className={classes.container}>
          <Typography variant="h2" className={classes.subtitle2}>
            “Linker는 이런 서비스 입니다.”
          </Typography>
          <Typography variant="h4" className={classes.subtitle}>
            링커 플랫폼에서 제공하는 서비스는 멘토링을 통해 발생하는 모든 수익은
            당신에게 돌아갑니다. <br />
            링커는 플랫폼 제공에 대한 최소한의 합리적인 수수료만 제공받습니다.
          </Typography>
        </div>
      </Parallax>

      {/* 4페이지 */}
      <Parallax filter image={require('../../assets/img/welcome-bg4.jpg')}>
        <div className={classes.container}>
          <Typography variant="h2" className={classes.subtitle3}>
            Linker가 제공하는 멘토회원에 대한 혜택
          </Typography>
          <Typography variant="h4" className={classes.subtitle4}>
            <strong>멘토링/과외 매칭 서비스 제공</strong>
          </Typography>
          <Typography variant="h4" className={classes.desc}>
            본인의 학업 활동 내용에 맞는 멘토링/과외 매칭 서비스 제공합니다.
          </Typography>

          <Typography variant="h4" className={classes.subtitle4}>
            <strong>활동에 따른 높은 수익</strong>
          </Typography>
          <Typography variant="h4" className={classes.desc}>
            Linker에서 멘토로 활동하여 발생한 수익의 최소 수수료 제 후 제공해
            드립니다
          </Typography>

          <Typography variant="h4" className={classes.subtitle4}>
            <strong>특정기간 수수료 면제(1차 공식 모집 참여 멘토 한정)</strong>
          </Typography>
          <Typography variant="h4" className={classes.desc}>
            1차 공식 모집에 참여한 멘토의 경우 일정기간 수수료 면제 혜택 제공해
            드립니다.
          </Typography>

          <Typography variant="h4" className={classes.subtitle4}>
            <strong>
              정보거래 활성 지원금 10만원 지급 (1차 공식 모집 참여 멘토 한정)
            </strong>
          </Typography>
          <Typography variant="h4" className={classes.desc}>
            1차 공식 모집에 참여한 멘토에게는 정보 거래 활성화 지원금 10만원
            지급
          </Typography>
        </div>
      </Parallax>

      {/* 5 페이지 */}
      <Parallax filter image={require('../../assets/img/welcome-bg5.jpg')}>
        <div className={classes.container}>
          <Typography variant="h2" className={classes.subtitle3}>
            Linker가 약속하는 보안/안전성 지원금 10만원 지급
          </Typography>
          <Typography variant="h4" className={classes.subtitle4}>
            <strong>생활기록부 원본 Data 삭제처리</strong>
          </Typography>
          <Typography variant="h4" className={classes.desc}>
            업로드한 자료의 원본은 추출 후 즉시 삭제처리 합니다
          </Typography>

          <Typography variant="h4" className={classes.subtitle4}>
            <strong>철저한 Data 저장/보관</strong>
          </Typography>
          <Typography variant="h4" className={classes.desc}>
            추출된 Data는 AWS(아마존웹서버)의 격리된 보안영역에 저장됩니다.
          </Typography>

          <Typography variant="h4" className={classes.subtitle4}>
            <strong>Data 암호화 통신</strong>
          </Typography>
          <Typography variant="h4" className={classes.desc}>
            저장된 데이터의 해킹을 방지하기 위해 모든 Data를 암호화 처리하여
            전송합니다.
          </Typography>

          <Typography variant="h4" className={classes.subtitle4}>
            <strong>무단 도용에 대한 제재</strong>
          </Typography>
          <Typography variant="h4" className={classes.desc}>
            - 서비스 내 정보 제공 시 워터마크 표시하여 제공됩니다.
            <br />- 약관을 통해서 무단 사용의 법적인 제재 명시됩니다.
          </Typography>
        </div>
      </Parallax>
    </>
  );
};

export default Intro;
