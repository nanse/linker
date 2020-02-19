import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// layout
import UploadLayout from '../components/Layouts/UploadLayout';

const styles = {
  // root: {},
  // container: {
  //   margin: '0 auto',
  //   padding: theme.spacing(3),
  // },
  // title: {
  //   marginTop: theme.spacing(-10),
  //   color: theme.palette.common.neutral,
  //   fontSize: '3.2rem',
  //   fontWeight: '600',
  //   lineHeight: '60px',
  // },
  // subtitle: {
  //   marginTop: theme.spacing(7),
  //   marginBottom: theme.spacing(5),
  //   color: theme.palette.common.neutral,
  //   fontSize: '1.4rem',
  //   lineHeight: '30px',
  // },
  // buttonContainer: {
  //   textAlign: 'center',
  // },
  // button: {
  //   margin: theme.spacing(2),
  // },
};

const useStyles = makeStyles(styles);

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <UploadLayout>
      <Typography variant="h1" className={classes.title}>
        멘토 사전등록
      </Typography>

      <Typography variant="body1" className={classes.subtitle}>
        입시최강 서비스 링커에서 멘토분들을 사전 등록하는 행사를 진행합니다.
        <br />
        입시 최강 서비스 링커에서 멘토분들을 사전 등록하는 행사를 진행합니다.
        <br />
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
          endIcon={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
          href="/register"
        >
          등록하러 가기
        </Button>
      </div>
    </UploadLayout>
  );
};

export default WelcomePage;
