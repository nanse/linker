import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

// modules
import { openModal } from '../../modules/base';
import { changeField, initializeForm, register } from '../../modules/auth';

import RegisterForm from '../../components/auth/RegisterForm';

const RegisterContainer = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');

  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
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

  // form Submit 이벤트 핸들러
  const handleSubmit = e => {
    e.preventDefault();
    const { nickname, emailId, password, passwordConfirm } = form;

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
        sessionStorage.setItem('auth', JSON.stringify(auth.result));
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
    ></RegisterForm>
  );
};

export default withRouter(RegisterContainer);
