import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/core
import { Button, CircularProgress } from '@material-ui/core';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import Lock from '@material-ui/icons/Lock';
import { InputAdornment, FormControlLabel, Checkbox } from '@material-ui/core';

import CardBody from '../Card/CardBody.js';
import CardFooter from '../Card/CardFooter.js';
import CustomInput from '../CustomInput/CustomInput.js';

import AuthForm from './AuthForm';
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
  terms: {
    textAlign: 'center',
  },
}));

const RegisterForm = ({
  cardAnimaton,
  termsList = [],
  termsListLoading,
  isSendSms,
  sendSmsLoading,
  onSubmit,
  onChange,
  onSmsSend,
  onShowTerms,
  onTermsClick,
}) => {
  const classes = useStyles();

  return (
    <AuthForm title="회원가입" cardAnimaton={cardAnimaton} onSubmit={onSubmit}>
      <CardBody>
        <CustomInput
          labelText="닉네임"
          id="nickname"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            type: 'text',
          }}
          endAdornment={
            <InputAdornment position="end">
              <People className={classes.inputIconsColor} />
            </InputAdornment>
          }
          onChange={onChange}
          autoFocus
        />
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

        {/* 약관동의 */}
        <div className={classes.terms}>
          {termsListLoading ? (
            <CircularProgress></CircularProgress>
          ) : (
            termsList.map(terms => (
              <div key={terms.termNo}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      id={terms.termNo}
                      required={terms.termRequiredYn === 'Y'}
                      onClick={() => onTermsClick(terms.termNo)}
                    />
                  }
                  label={`${terms.termNm} ${terms.termRequiredYn === 'Y' &&
                    '(필수)'}`}
                />
                <Button
                  color="secondary"
                  onClick={() => onShowTerms(terms.termNo)}
                >
                  약관보기
                </Button>
              </div>
            ))
          )}
        </div>
      </CardBody>
      <CardFooter className={classes.cardFooter}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
          fullWidth
        >
          확인
        </Button>
      </CardFooter>
    </AuthForm>
  );
};

export default RegisterForm;
