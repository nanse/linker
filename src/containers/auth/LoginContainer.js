import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

// modules
import { openModal } from '../../modules/base';
import { changeField, initializeForm, register } from '../../modules/auth';

import LoginForm from '../../components/auth/LoginForm';

const RegisterContainer = ({ history }) => {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');

  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
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
          form: 'login',
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
    const { emailId, password } = form;

    // 하나라도 비어있다면
    if ([emailId, password].includes('')) {
      dispatch(
        openModal({
          title: '알림',
          description: '빈 칸을 모두 입력하세요.',
          showCancelbutton: false,
        }),
      );
      return;
    }

    dispatch(register({ type: 'LOGIN', emailId, password }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('login'));
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
    <LoginForm
      cardAnimaton={cardAnimaton}
      onChange={handleChange}
      onSubmit={handleSubmit}
    ></LoginForm>
  );
};

export default withRouter(RegisterContainer);
