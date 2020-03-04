import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import Lock from '@material-ui/icons/Lock';
import { InputAdornment } from '@material-ui/core';

import Button from '../CustomButtons/Button.js';
import Card from '../Card/Card.js';
import CardBody from '../Card/CardBody.js';
import CardHeader from '../Card/CardHeader.js';
import CardFooter from '../Card/CardFooter.js';
import CustomInput from '../CustomInput/CustomInput.js';

import styles from '../../assets/jss/material-kit-react/pages/registerPage.js';
const useStyles = makeStyles(styles);

const RegisterForm = ({ cardAnimaton, onSubmit, onChange }) => {
  const classes = useStyles();

  return (
    <Card className={classes[cardAnimaton]}>
      <form className={classes.form} onSubmit={onSubmit}>
        <CardHeader color="primary" className={classes.cardHeader}>
          <h4>회원가입</h4>
        </CardHeader>
        <p className={classes.divider}>
          회원 가입하시고 풍성한 혜택을 누리세요 .
        </p>
        <CardBody>
          <CustomInput
            labelText="닉네임"
            id="nickname"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              endAdornment: (
                <InputAdornment position="end">
                  <People className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
            onChange={onChange}
          />
          <CustomInput
            labelText="이메일"
            id="emailId"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'email',
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
            onChange={onChange}
          />
          <CustomInput
            labelText="패스워드"
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'password',
              endAdornment: (
                <InputAdornment position="end">
                  <Lock className={classes.inputIconsColor}></Lock>
                </InputAdornment>
              ),
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
            inputProps={{
              type: 'password',
              endAdornment: (
                <InputAdornment position="end">
                  <Lock className={classes.inputIconsColor}></Lock>
                </InputAdornment>
              ),
              autoComplete: 'off',
            }}
            onChange={onChange}
          />
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button color="primary" size="lg" type="submit">
            등록
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default RegisterForm;
