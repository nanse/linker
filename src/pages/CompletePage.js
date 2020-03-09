import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// layout
import UploadLayout from '../components/Layouts/Upload/UploadLayout';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
  },
  paper: {
    position: 'absolute',
    width: 300,
    height: 290,
    top: 'calc(50% - (500px / 2))',
    left: 'calc(50% - (300px / 2))',
    backgroundColor: 'rgba(42, 42, 42, 0.9)',
    textAlign: 'center',
    '& > div': {
      margin: theme.spacing(4),
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
      <Paper elevation={3} className={classes.paper}>
        <div>
          <img
            src="/img/logo-primary.png"
            alt="step1"
            className={classes.img}
          ></img>
        </div>
        <Typography variant="h4" className={classes.desc}>
          멘토 사전등록 <br />
          신청이 완료 되었습니다.
          <br />
          <br />
          해당 브라우저를 종료하셔서 <br />
          안전하게 로그아웃 하세요.
        </Typography>
      </Paper>
    </UploadLayout>
  );
};

export default WelcomePage;
