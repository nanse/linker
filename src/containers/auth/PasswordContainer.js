import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

// modules
import { openModal } from '../../modules/base';
import {
  changeField,
  initializeForm,
  password,
  passwordUpdate,
  sendSms,
} from '../../modules/auth';

import PasswordForm from '../../components/auth/PasswordForm';
import PasswordUpdateForm from '../../components/auth/PasswordUpdateForm';

const RegisterContainer = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [isNextStep, setIsNextStep] = useState(false);

  const dispatch = useDispatch();
  const {
    form,
    sendSmsLoading,
    isSendSms,
    passwordAuth,
    isPasswordUpdate,
    authError,
  } = useSelector(({ auth, loading }) => ({
    form: auth.register,
    sendSmsLoading: loading['auth/SEND_SMS'],
    isSendSms: auth.register.isSendSms,
    passwordAuth: auth.passwordAuth,
    isPasswordUpdate: auth.isPasswordUpdate,
    authError: auth.authError,
  }));

  // **
  // handler
  // **
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

  // 휴대폰 인증
  const handleSmsSend = useCallback(() => {
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

    if (phoneNumber.length !== 11) {
      dispatch(
        openModal({
          title: '알림',
          description: '올바른 핸드폰 번호로 입력 해주세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    dispatch(sendSms({ phoneNumber }));
  }, [form, dispatch]);

  // 휴대폰 인증 만료시
  const handleSmsExpired = useCallback(() => {
    dispatch(
      openModal({
        title: '알림',
        description:
          '휴대폰 인증 시간이 만료 되었습니다. 다시 재발급 받으세요.',
        showCancelbutton: false,
        onConfirm: () => {
          dispatch(
            changeField({
              form: 'register',
              key: 'isSendSms',
              value: false,
            }),
          );
        },
      }),
    );
  }, [dispatch]);

  // 비밀번호 찾기 폼전송
  const handleSubmit = e => {
    e.preventDefault();
    const { emailId, phoneNumber, smsConfirmCd, isSendSms } = form;

    // 하나라도 비어있다면
    if ([emailId, password, smsConfirmCd].includes('')) {
      dispatch(
        openModal({
          title: '알림',
          description: '빈 칸을 모두 입력하세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    // 휴대폰 인증을 않받았다면,
    if (!isSendSms) {
      dispatch(
        openModal({
          title: '알림',
          description: '휴대폰 인증을 받아주세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    // 휴대폰 인증 번호를 입력 안했을경우,
    if (!smsConfirmCd) {
      dispatch(
        openModal({
          title: '알림',
          description: '휴대폰 인증 번호를 입력해주세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    dispatch(
      password({
        emailId,
        phoneNumber,
        smsConfirmCd,
      }),
    );
  };

  // 비밀번호 업데이트 폼전송
  const handlePasswordUpdateSubmit = e => {
    e.preventDefault();
    const { emailId, password, passwordConfirm } = form;

    // 하나라도 비어있다면
    if ([password, passwordConfirm].includes('')) {
      dispatch(
        openModal({
          title: '알림',
          description: '빈칸을 모두 입력하세요.',
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

    dispatch(
      passwordUpdate({
        emailId,
        password,
      }),
    );
  };

  // **
  // useEffect
  // **

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch, history]);

  // 비밀번호 휴대폰인증 성공 / 실패 처리
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
    if (passwordAuth) {
      dispatch(
        openModal({
          title: '알림',
          description: '인증 되었습니다.',
          showCancelbutton: false,
          onConfirm: () => setIsNextStep(true),
        }),
      );
    }
  }, [passwordAuth, authError, dispatch]);

  // 비밀번호 업데이트 성공 / 실패 처리
  useEffect(() => {
    // 성공
    if (isPasswordUpdate) {
      dispatch(
        openModal({
          title: '알림',
          description: '비밀번호가 변경되었습니다.',
          showCancelbutton: false,
          onConfirm: () => history.push('/login'),
        }),
      );
    }
  }, [isPasswordUpdate, dispatch, history]);

  return (
    <>
      {/* 휴대폰 인증 전 단계 */}
      {!isNextStep && (
        <PasswordForm
          cardAnimaton={cardAnimaton}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onSmsSend={handleSmsSend}
          isSendSms={isSendSms}
          sendSmsLoading={sendSmsLoading}
          onExpired={handleSmsExpired}
        ></PasswordForm>
      )}
      {/* 휴대폰 인증 후 단계 */}
      {isNextStep && (
        <PasswordUpdateForm
          cardAnimaton={cardAnimaton}
          onChange={handleChange}
          onPasswordUpdateSubmit={handlePasswordUpdateSubmit}
        ></PasswordUpdateForm>
      )}
    </>
  );
};

export default withRouter(RegisterContainer);
