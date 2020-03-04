import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
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

const LoginForm = ({ cardAnimaton, onSubmit, onChange }) => {
  const classes = useStyles();

  return (
    <Card className={classes[cardAnimaton]}>
      <form className={classes.form} onSubmit={onSubmit}>
        <CardHeader color="primary" className={classes.cardHeader}>
          <h4>로그인</h4>
        </CardHeader>

        <CardBody>
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
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button color="primary" size="lg" type="submit">
            로그인
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
