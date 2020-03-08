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
            <img
              src="/img/guide/step-1.png"
              className={classes.img}
              alt="step1"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-2.png"
              className={classes.img}
              alt="step2"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-3.png"
              className={classes.img}
              alt="step3"
            ></img>
          </Grid>

          {/* 4 ~ 6 */}
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-4.png"
              className={classes.img}
              alt="step4"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-5.png"
              className={classes.img}
              alt="step5"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-6.png"
              className={classes.img}
              alt="step6"
            ></img>
          </Grid>

          {/* 7 ~ 10 */}
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-7.png"
              className={classes.img}
              alt="step7"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-8.png"
              className={classes.img}
              alt="step8"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-9.png"
              className={classes.img}
              alt="step9"
            ></img>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src="/img/guide/step-10.png"
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
