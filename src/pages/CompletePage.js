import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// layout
import UploadLayout from '../components/Layouts/Upload/UploadLayout';
import Parallax from '../components/Parallax/Parallax';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
  },
  paper: {
    position: 'absolute',
    width: 300,
    height: 400,
    top: 'calc(50% - (650px / 2))',
    left: 'calc(50% - (300px / 2))',
    backgroundColor: 'rgba(42, 42, 42, 0.9)',
    textAlign: 'center',
    '& > div': {
      margin: theme.spacing(3),
    },
  },
  img: {
    height: 'auto',
    width: 150,
  },
  desc: {
    color: '#fff',
  },
}));

const WelcomePage = () => {
  const classes = useStyles();
  return (
    <UploadLayout>
      <Helmet>
        <title>업로드 완료 - Linker</title>
      </Helmet>
      <Parallax image={require('../assets/img/welcome-bg1.png')}>
        <Paper elevation={3} className={classes.paper}>
          <div>
            <img
              src="/img/logo-primary.png"
              alt="step1"
              className={classes.img}
            ></img>
          </div>
          <Typography variant="h4" className={classes.desc}>
            멘토 사전등록 <br></br>신청이 완료 되었습니다.
            <br />
            <br />
            <br />
            해당 브라우저를 종료하셔서 안전하게 로그아웃 하세요
            <br />
            <br />
            <br />
            <Button variant="contained" color="secondary">
              브라우저 닫기
            </Button>
          </Typography>
        </Paper>
      </Parallax>
    </UploadLayout>
  );
};

export default WelcomePage;
