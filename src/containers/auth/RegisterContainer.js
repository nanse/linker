import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

// modules
import { openModal } from '../../modules/base';
import {
  changeField,
  initializeForm,
  register,
  terms,
  listTerms,
  sendSms,
  emailDuplicateCheck,
  nicknameDuplicateCheck,
} from '../../modules/auth';

import RegisterForm from '../../components/auth/RegisterForm';

const RegisterContainer = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  const [agreementTerms, setAgreementTerms] = useState([]);

  const dispatch = useDispatch();
  const {
    form,
    auth,
    termsList,
    termsListLoading,
    termsContent,
    sendSmsLoading,
    isSendSms,
    isEmail,
    emailErrorMesage,
    isNickname,
    nicknameErrorMesage,
    authError,
  } = useSelector(({ auth, loading }) => ({
    form: auth.register,
    auth: auth.auth,
    termsList: auth.terms.termsList,
    termsListLoading: loading['auth/LIST_TERMS'],
    termsContent: auth.termsDetail,
    sendSmsLoading: loading['auth/SEND_SMS'],
    isSendSms: auth.register.isSendSms,
    isNickname: auth.valid.isNickname,
    nicknameErrorMesage: auth.valid.nicknameErrorMesage,
    isEmail: auth.valid.isEmail,
    emailErrorMesage: auth.valid.emailErrorMesage,
    authError: auth.authError,
  }));

  // **
  // handler
  // **
  setTimeout(function() {
    setCardAnimation('');
  }, 700);

  const emailCheck = (str = '') => {
    const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    return regx.test(str);
  };

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

      // nickname 중복체크
      id === 'nickname' &&
        dispatch(
          nicknameDuplicateCheck({
            value,
          }),
        );

      // email 중복체크
      id === 'emailId' &&
        emailCheck(value) &&
        dispatch(
          emailDuplicateCheck({
            value,
          }),
        );
    },
    [dispatch],
  );

  // 약관보기
  const handleShowTerms = termsNo => {
    dispatch(
      terms({
        termsNo,
      }),
    );
  };

  // 약관 체크
  const handleTermsClick = termsNo => {
    if (agreementTerms.includes(termsNo)) {
      setAgreementTerms(agreementTerms.filter(item => item !== termsNo));
    } else {
      setAgreementTerms(agreementTerms.concat(termsNo));
    }
  };

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
      isSendSms,
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

    if (!isEmail && !isNickname) {
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
      register({
        nickname,
        emailId,
        password,
        passwordConfirm,
        phoneNumber,
        smsConfirmCd,
        agreementTerms,
      }),
    );
  };

  // **
  // useEffect
  // **

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    try {
      const auth = sessionStorage.getItem('auth');
      // 인증 정보가 있으면 upload 페이지로 이동합니다.
      if (auth) {
        history.push('/upload');
      }
    } catch (error) {}
    dispatch(initializeForm('register'));
    dispatch(listTerms());
  }, [dispatch, history]);

  useEffect(() => {
    // 성공
    if (termsContent) {
      dispatch(
        openModal({
          title: '',
          isTerms: true,
          description: termsContent.termsContent,
          showCancelbutton: false,
        }),
      );
      return;
    }
  }, [termsContent]);

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
        console.log('sessionStorage is not working');
      }
    }
  }, [auth, authError, dispatch, history]);

  // console.log('> termsList: ', termsList);
  return (
    <RegisterForm
      cardAnimaton={cardAnimaton}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onShowTerms={handleShowTerms}
      onSmsSend={handleSmsSend}
      onTermsClick={handleTermsClick}
      termsList={termsList}
      termsListLoading={termsListLoading}
      isSendSms={isSendSms}
      sendSmsLoading={sendSmsLoading}
      isNickname={isNickname}
      nicknameErrorMesage={nicknameErrorMesage}
      isEmail={isEmail}
      emailErrorMesage={emailErrorMesage}
      onExpired={handleSmsExpired}
    ></RegisterForm>
  );
};

export default withRouter(RegisterContainer);
