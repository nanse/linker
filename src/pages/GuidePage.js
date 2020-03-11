import React from 'react';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import UploadLayout from '../components/Layouts/Upload/UploadLayout';
import BannerPc from '../components/Banner/BannerPc';
import BannerMobile from '../components/Banner/BannerMobile';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
  },
  img: {
    height: 'auto',
    width: '100%',
    maxWidth: '1200px',
  },
  button: {
    margin: theme.spacing(3),
  },
}));

const GuidePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  return (
    <UploadLayout isParallax={false}>
      {isDesktop ? <BannerPc></BannerPc> : <BannerMobile></BannerMobile>}
      <div style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="https://d1kyxr8j5cxx49.cloudfront.net/data/%EB%A7%81%EC%BB%A4%EB%A9%98%ED%86%A0%ED%95%A9%EA%B2%A9%EC%88%98%EA%B8%B0%EC%96%91%EC%8B%9D.docx"
          target="_blank"
          className={classes.button}
        >
          합격수기 템플릿 다운로드
        </Button>
      </div>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          {/* 1 ~ 3 */}
          <Grid item xs={12} sm={12} md={6}>
            <a href="https://www.neis.go.kr/" target="_blank">
              <img
                src="/img/guide/step-1.jpg"
                className={classes.img}
                alt="step1"
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-2.jpg"
              className={classes.img}
              alt="step2"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-3.jpg"
              className={classes.img}
              alt="step3"
            ></img>
          </Grid>

          {/* 4 ~ 6 */}
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-4.jpg"
              className={classes.img}
              alt="step4"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-5.jpg"
              className={classes.img}
              alt="step5"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-6.jpg"
              className={classes.img}
              alt="step6"
            ></img>
          </Grid>

          {/* 7 ~ 10 */}
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-7.jpg"
              className={classes.img}
              alt="step7"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-8.jpg"
              className={classes.img}
              alt="step8"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-9.jpg"
              className={classes.img}
              alt="step9"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-10.jpg"
              className={classes.img}
              alt="step10"
            ></img>
          </Grid>
        </Grid>
      </div>
    </UploadLayout>
  );
};

export default GuidePage;
