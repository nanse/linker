import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import { InputAdornment, Button } from '@material-ui/core';

import AuthForm from './AuthForm';
import CardBody from '../Card/CardBody.js';
import CardFooter from '../Card/CardFooter.js';
import CustomInput from '../CustomInput/CustomInput.js';

// import styles from '../../assets/jss/material-kit-react/pages/registerPage.js';
const useStyles = makeStyles(theme => ({
  cardFooter: {
    paddingTop: '0rem',
    border: '0',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
  inputIconsColor: {
    color: '#495057',
  },
  password: {
    textAlign: 'right',
  },
}));

const LoginForm = ({ cardAnimaton, onSubmit, onChange }) => {
  const classes = useStyles();

  return (
    <AuthForm title="로그인" cardAnimaton={cardAnimaton} onSubmit={onSubmit}>
      <CardBody>
        <CustomInput
          labelText="이메일"
          id="emailId"
          formControlProps={{
            fullWidth: true,
          }}
          endAdornment={
            <InputAdornment position="end">
              <Email className={classes.inputIconsColor} />
            </InputAdornment>
          }
          inputProps={{
            type: 'email',
          }}
          onChange={onChange}
        />
        <CustomInput
          labelText="패스워드"
          id="password"
          formControlProps={{
            fullWidth: true,
          }}
          endAdornment={
            <InputAdornment position="end">
              <Lock className={classes.inputIconsColor}></Lock>
            </InputAdornment>
          }
          inputProps={{
            type: 'password',
            autoComplete: 'off',
          }}
          onChange={onChange}
        />

        <div className={classes.password}>
          <Button color="secondary" href="/password">
            비밀번호 찾기
          </Button>
        </div>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button variant="contained" color="secondary" type="submit">
          로그인
        </Button>
      </CardFooter>
    </AuthForm>
  );
};

export default LoginForm;
