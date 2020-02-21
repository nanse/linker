import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment } from '@material-ui/core';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import Lock from '@material-ui/icons/Lock';

// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';
import Button from '../components/CustomButtons/Button.js';
import Card from '../components/Card/Card.js';
import CardBody from '../components/Card/CardBody.js';
import CardHeader from '../components/Card/CardHeader.js';
import CardFooter from '../components/Card/CardFooter.js';
import CustomInput from '../components/CustomInput/CustomInput.js';

// layout
import UploadLayout from '../components/Layouts/UploadLayout';

// modules
import { openModal } from '../modules/base';
import { changeField, initializeForm, register } from '../modules/auth';

import styles from '../assets/jss/material-kit-react/pages/registerPage.js';

const useStyles = makeStyles(styles);

const RegisterPage = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [error, setError] = useState(null);
  // console.log(error);

  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const classes = useStyles();

  setTimeout(function() {
    setCardAnimation('');
  }, 700);

  // 인풋 변경 이벤트 핸들러
  const handleChange = useCallback(
    e => {
      const { value, id } = e.target;

      dispatch(
        changeField({
          form: 'register',
          key: id,
          value,
        }),
      );
    },
    [dispatch],
  );

  // form Submit 이벤트 핸들러
  const handleSubmit = e => {
    e.preventDefault();
    const { nickname, emailId, password, passwordConfirm } = form;

    // 하나라도 비어있다면
    if ([nickname, emailId, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      dispatch(
        openModal({
          title: '알림',
          description: '빈 칸을 모두 입력하세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }
    // 비밀번호가 일치하지 않는다면
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(
        openModal({
          title: '알림',
          description: '비밀번호가 일치하지 않습니다.',
          showCancelbutton: false,
        }),
      );
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    dispatch(register({ nickname, emailId, password, passwordConfirm }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    // 실패
    if (authError) {
      dispatch(
        openModal({
          title: '알림',
          description: authError.resultText,
          showCancelbutton: false,
        }),
      );
      return;
    }

    // 성공
    if (auth) {
      try {
        localStorage.setItem('auth', JSON.stringify(auth.result));
        history.push('/upload');
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [auth, authError, dispatch, history]);

  // user 값이 잘 설정되었는지 확인
  // useEffect(() => {
  //   if (user) {
  //     history.push('/'); // 홈 화면으로 이동
  //     try {
  //       localStorage.setItem('user', JSON.stringify(user));
  //     } catch (e) {
  //       console.log('localStorage is not working');
  //     }
  //   }
  // }, [history, user]);

  return (
    <UploadLayout>
      <Helmet>
        <title>회원가입 하기 - Linker</title>
      </Helmet>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes[cardAnimaton]}>
            <form className={classes.form} onSubmit={handleSubmit}>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button color="primary" size="lg" type="submit">
                  회원가입 완료
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </UploadLayout>
  );
};

export default withRouter(RegisterPage);
