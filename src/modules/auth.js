import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN',
);

// 약관
const [
  LIST_TERMS,
  LIST_TERMS_SUCCESS,
  LIST_TERMS_FAILURE,
] = createRequestActionTypes('auth/LIST_TERMS');

// 휴대폰인증
const [SEND_SMS, SEND_SMS_SUCCESS, SEND_SMS_FAILURE] = createRequestActionTypes(
  'auth/SEND_SMS',
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , record
    key, // emailId, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const register = createAction(
  REGISTER,
  ({
    type,
    nickname = '',
    emailId,
    password,
    passwordConfirm = '',
    agreementTerms,
  }) => ({
    type,
    nickname,
    emailId,
    password,
    passwordConfirm,
    agreementTerms,
  }),
);

export const listTerms = createAction(LIST_TERMS);
export const sendSms = createAction(SEND_SMS, ({ phoneNumber }) => ({
  phoneNumber,
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const listTermsSaga = createRequestSaga(LIST_TERMS, authAPI.listTerms);
const sendSmsSaga = createRequestSaga(SEND_SMS, authAPI.sendSms);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LIST_TERMS, listTermsSaga);
  yield takeLatest(SEND_SMS, sendSmsSaga);
}

const initialState = {
  register: {
    nickname: '',
    emailId: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    smsConfirmCd: '',
    isSendSms: false,
    isSmsConfirm: false,
  },
  login: {
    emailId: '',
    password: '',
  },
  terms: {},
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 약관 가져오기 성공
    [LIST_TERMS_SUCCESS]: (state, { payload: terms }) => ({
      ...state,
      authError: null,
      terms,
    }),
    // 약관 가져오기 실패
    [LIST_TERMS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // SMS 인증문자 발송 성공
    [SEND_SMS_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.register.isSendSms = true;
        draft.authError = null;
      }),
    // SMS 인증문자 발송 실패
    [SEND_SMS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
      isSendSms: false,
    }),
  },
  initialState,
);

export default auth;
