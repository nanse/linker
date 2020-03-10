import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Lock from '@material-ui/icons/Lock';
import { InputAdornment, Button } from '@material-ui/core';

import AuthForm from './AuthForm';
import CardBody from '../Card/CardBody.js';
import CardFooter from '../Card/CardFooter.js';
import CustomInput from '../CustomInput/CustomInput.js';

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

const LoginForm = ({ cardAnimaton, onPasswordUpdateSubmit, onChange }) => {
  const classes = useStyles();

  return (
    <AuthForm
      title="새로운 비밀번호를 입력하세요."
      cardAnimaton={cardAnimaton}
      onSubmit={onPasswordUpdateSubmit}
    >
      <CardBody>
        <CustomInput
          labelText="새로운 패스워드"
          id="password"
          placeholder="패스워드는 최소 6자 이상 입력해주세요."
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
        <CustomInput
          labelText="패스워드 확인"
          id="passwordConfirm"
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
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button variant="contained" color="secondary" type="submit">
          확인
        </Button>
      </CardFooter>
    </AuthForm>
  );
};

export default LoginForm;
