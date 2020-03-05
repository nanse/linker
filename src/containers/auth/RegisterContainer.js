import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

// modules
import { openModal } from '../../modules/base';
import {
  changeField,
  initializeForm,
  register,
  listTerms,
  sendSms,
} from '../../modules/auth';

import RegisterForm from '../../components/auth/RegisterForm';

const RegisterContainer = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');

  const dispatch = useDispatch();
  const {
    form,
    auth,
    termsList,
    termsLoading,
    sendSmsLoading,
    isSendSms,
    authError,
  } = useSelector(({ auth, loading }) => ({
    form: auth.register,
    auth: auth.auth,
    termsList: auth.terms.termList,
    termsLoading: loading['auth/LIST_TERMS'],
    sendSmsLoading: loading['auth/SEND_SMS'],
    isSendSms: auth.register.isSendSms,
    authError: auth.authError,
  }));

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

  // 약관보기
  const handleShowTerms = termNo => {
    console.log(termNo);
  };

  // 휴대폰 인증
  const handleSendSms = useCallback(() => {
    const { phoneNumber } = form;
    // 폰번호가 없다면,,,
    if (!phoneNumber) {
      dispatch(
        openModal({
          title: '알림',
          description: '핸드폰 번호를 입력하세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }
    dispatch(sendSms({ phoneNumber }));
  }, [form, dispatch]);

  // form Submit 이벤트 핸들러
  const handleSubmit = e => {
    e.preventDefault();
    const {
      nickname,
      emailId,
      password,
      passwordConfirm,
      phoneNumber,
      smsConfirmCd,
      sendSms,
    } = form;

    // 하나라도 비어있다면
    if ([nickname, emailId, password, passwordConfirm].includes('')) {
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

    // 휴대폰 인증을 않받았다면,
    if (!sendSms) {
      dispatch(
        openModal({
          title: '알림',
          description: '휴대폰 인증을 받아주세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    // 약관동의를 안했다면,
    if (!sendSms) {
      dispatch(
        openModal({
          title: '알림',
          description: '휴대폰 인증을 받아주세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    dispatch(
      register({
        nickname,
        emailId,
        password,
        passwordConfirm,
        agreementTerms: [1],
      }),
    );
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
    dispatch(listTerms());
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
        sessionStorage.setItem('auth', JSON.stringify(auth));
        history.push('/upload');
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [auth, authError, dispatch, history]);

  return (
    <RegisterForm
      cardAnimaton={cardAnimaton}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onShowTerms={handleShowTerms}
      onSendSms={handleSendSms}
      termsList={termsList}
      termsLoading={termsLoading}
      isSendSms={isSendSms}
      sendSmsLoading={sendSmsLoading}
    ></RegisterForm>
  );
};

export default withRouter(RegisterContainer);
