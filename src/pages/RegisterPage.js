import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, InputAdornment } from '@material-ui/core';

// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import Lock from '@material-ui/icons/Lock';

// core components
import Footer from '../components/Footer/Footer.js';
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';
import Button from '../components/CustomButtons/Button.js';
import Card from '../components/Card/Card.js';
import CardBody from '../components/Card/CardBody.js';
import CardHeader from '../components/Card/CardHeader.js';
import CardFooter from '../components/Card/CardFooter.js';
import CustomInput from '../components/CustomInput/CustomInput.js';
import ModalContainer from '../containers/modal/ModalContainer';

// modules
import { openModal } from '../modules/base';
import { check } from '../modules/user';
import { changeField, initializeForm, register } from '../modules/auth';

import styles from '../assets/jss/material-kit-react/pages/RegisterPage.js';
import image from 'assets/img/bg7.jpg';

const useStyles = makeStyles(styles);

const RegisterPage = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [error, setError] = useState(null);
  console.log(error);

  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const classes = useStyles();

  setTimeout(function() {
    setCardAnimation('');
  }, 700);

  // 인풋 변경 이벤트 핸들러
  const handleChange = e => {
    const { value, id } = e.target;

    dispatch(
      changeField({
        form: 'register',
        key: id,
        value,
      }),
    );
  };

  // form Submit 이벤트 핸들러
  const handleSubmit = e => {
    e.preventDefault();
    const { nickname, email, password, passwordConfirm } = form;

    // 하나라도 비어있다면
    if ([nickname, email, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      dispatch(
        openModal({
          title: '알림',
          description: '빈 칸을 모두 입력하세요.',
          onConfirm: () => console.log('확인 눌름'),
          onCancel: () => console.log('취소 눌름'),
          confirmText: 'Ok',
          cancelText: 'cancel',
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
          onConfirm: () => console.log('확인 눌름'),
          onCancel: () => console.log('취소 눌름'),
          confirmText: 'Ok',
          cancelText: 'cancel',
          showCancelbutton: false,
        }),
      );
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    dispatch(register({ nickname, email, password, passwordConfirm }));
  };

  // open modal
  const handleOpenModal = () => {
    dispatch(
      openModal({
        title: '알림',
        description: '당신을 체포합니다',
        onConfirm: () => console.log('확인 눌름'),
        onCancel: () => console.log('취소 눌름'),
        confirmText: 'Ok',
        cancelText: 'cancel',
        showCancelbutton: false,
      }),
    );
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    if (authError) {
      // 계정명이 이미 존재할 때
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        dispatch(
          openModal({
            title: '알림',
            description: '이미 존재하는 계정명입니다.',
            onConfirm: () => console.log('확인 눌름'),
            onCancel: () => console.log('취소 눌름'),
            confirmText: 'Ok',
            cancelText: 'cancel',
            showCancelbutton: true,
          }),
        );
        return;
      }
      // 기타 이유
      setError('회원가입 실패');
      dispatch(
        openModal({
          title: '회원가입 실패',
          description: '회원가입 실패',
          onConfirm: () => console.log('확인 눌름'),
          onCancel: () => console.log('취소 눌름'),
          confirmText: 'Ok',
          cancelText: 'cancel',
          showCancelbutton: true,
        }),
      );
      return;
    }

    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user 값이 잘 설정되었는지 확인
  useEffect(() => {
    if (user) {
      history.push('/'); // 홈 화면으로 이동
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <div>
      <AppBar position="static" color={'primary'}>
        <Toolbar variant="dense">
          <Typography variant="h5">Linker</Typography>
        </Toolbar>
      </AppBar>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
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
                      id="email"
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
                    <Button color="success" size="lg" onClick={handleOpenModal}>
                      모달오픈
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
      <ModalContainer></ModalContainer>
    </div>
  );
};

export default withRouter(RegisterPage);
