import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import UploadLayout from '../components/Layouts/Upload/UploadLayout';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  img: {
    height: 'auto',
    width: '100%',
  },
}));

const GuidePage = () => {
  const classes = useStyles();
  return (
    <UploadLayout isParallax={false}>
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
