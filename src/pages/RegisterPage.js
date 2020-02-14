import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Parallax from '../components/Parallax/Parallax';

const styles = theme => ({
  root: {},
  container: {
    margin: '0 auto',
    padding: theme.spacing(3),
  },
  title: {
    marginTop: theme.spacing(-20),
    color: theme.palette.common.neutral,
    fontSize: '3.2rem',
    fontWeight: '600',
    lineHeight: '60px',
  },
  subtitle: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(5),
    color: theme.palette.common.neutral,
    fontSize: '1.4rem',
    lineHeight: '30px',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing(2),
  },
});

const useStyles = makeStyles(styles);

const RegisterPage = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5">Linker</Typography>
        </Toolbar>
      </AppBar>
      <Parallax
        image={require('../assets/img/bg2.jpg')}
        className={classes.root}
      >
        <div className={classes.container}>
          <Typography variant="h1" className={classes.title}>
            멘토 사전등록
          </Typography>

          <Typography variant="body1" className={classes.subtitle}>
            입시최강 서비스 링커에서 멘토분들을 사전 등록하는 행사를 진행합니다.
            <br />
            입시 최강 서비스 링커에서 멘토분들을 사전 등록하는 행사를
            진행합니다.
            <br />
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="large"
              endIcon={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
            >
              등록하러 가기
            </Button>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default RegisterPage;
