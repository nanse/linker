import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import { InputAdornment, Button } from '@material-ui/core';

import AuthForm from './AuthForm';
import CardBody from '../Card/CardBody.js';
import CardFooter from '../Card/CardFooter.js';
import CustomInput from '../CustomInput/CustomInput.js';

import CountDownTimer from '../Timer/CountDownTimer';

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

const LoginForm = ({
  cardAnimaton,
  onSubmit,
  onChange,
  onSmsSend,
  sendSmsLoading,
  isSendSms,
}) => {
  const classes = useStyles();

  return (
    <AuthForm
      title="비밀번호 찾기"
      cardAnimaton={cardAnimaton}
      onSubmit={onSubmit}
    >
      <CardBody>
        <CustomInput
          labelText="이메일"
          id="emailId"
          formControlProps={{
            fullWidth: true,
          }}
          endAdornment={
            <InputAdornment position="end">
              <Email className={classes.inputIconsColor}></Email>
            </InputAdornment>
          }
          inputProps={{ type: 'email' }}
          onChange={onChange}
        />
        {/* 핸드폰 인증번호 */}
        <CustomInput
          labelText="휴대폰 인증"
          placeholder="숫자만 입력 하세요"
          id="phoneNumber"
          formControlProps={{
            fullWidth: true,
          }}
          disabled={sendSmsLoading || isSendSms}
          endAdornment={
            <InputAdornment position="end">
              <Button
                color="secondary"
                size="small"
                onClick={onSmsSend}
                disabled={sendSmsLoading || isSendSms}
              >
                발송
              </Button>
            </InputAdornment>
          }
          inputProps={{
            type: 'number',
          }}
          onChange={onChange}
        />
        {isSendSms && (
          <>
            <CustomInput
              labelText="인증번호"
              id="smsConfirmCd"
              formControlProps={{
                fullWidth: true,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <CountDownTimer />
                </InputAdornment>
              }
              inputProps={{
                type: 'number',
              }}
              onChange={onChange}
            />
          </>
        )}
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
