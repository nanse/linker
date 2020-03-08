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

// 약관 상세
const [TERMS, TERMS_SUCCESS, TERMS_FAILURE] = createRequestActionTypes(
  'auth/TERMS',
);

// 휴대폰인증
const [SEND_SMS, SEND_SMS_SUCCESS, SEND_SMS_FAILURE] = createRequestActionTypes(
  'auth/SEND_SMS',
);

// 비밀번호 찾기 - 휴대폰인증
const [PASSWORD, PASSWORD_SUCCESS, PASSWORD_FAILURE] = createRequestActionTypes(
  'auth/PASSWORD',
);

// 비밀번호 업데이트
const [
  PASSWORD_UPDATE,
  PASSWORD_UPDATE_SUCCESS,
  PASSWORD_UPDATE_FAILURE,
] = createRequestActionTypes('auth/PASSWORD_UPDATE');

// 닉네임 중복체크
const [
  NICKNAME_CHECK,
  NICKNAME_CHECK_SUCCESS,
  NICKNAME_CHECK_FAILURE,
] = createRequestActionTypes('auth/NICKNAME_CHECK');

// 이메일 중복체크
const [
  EMAIL_CHECK,
  EMAIL_CHECK_SUCCESS,
  EMAIL_CHECK_FAILURE,
] = createRequestActionTypes('auth/EMAIL_CHECK');

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
    phoneNumber,
    smsConfirmCd,
    agreementTerms,
  }) => ({
    type,
    nickname,
    emailId,
    password,
    passwordConfirm,
    phoneNumber,
    smsConfirmCd,
    agreementTerms,
  }),
);

export const listTerms = createAction(LIST_TERMS);
export const terms = createAction(TERMS, ({ termNo }) => ({
  termNo,
}));
export const sendSms = createAction(SEND_SMS, ({ phoneNumber }) => ({
  phoneNumber,
}));

export const password = createAction(
  PASSWORD,
  ({ phoneNumber, emailId, smsConfirmCd }) => ({
    phoneNumber,
    emailId,
    smsConfirmCd,
  }),
);

export const passwordUpdate = createAction(PASSWORD_UPDATE, ({ password }) => ({
  password,
}));

export const emailDuplicateCheck = createAction(
  EMAIL_CHECK,
  ({ value: email }) => ({
    email,
  }),
);

export const nicknameDuplicateCheck = createAction(
  NICKNAME_CHECK,
  ({ value: nickname }) => ({
    nickname,
  }),
);

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const listTermsSaga = createRequestSaga(LIST_TERMS, authAPI.listTerms);
const termsSaga = createRequestSaga(TERMS, authAPI.terms);
const sendSmsSaga = createRequestSaga(SEND_SMS, authAPI.sendSms);
const passwordSaga = createRequestSaga(PASSWORD, authAPI.password);
const passwordUpdateSaga = createRequestSaga(
  PASSWORD_UPDATE,
  authAPI.passwordUpdate,
);
const emailDuplicateCheckSaga = createRequestSaga(
  EMAIL_CHECK,
  authAPI.emailCheck,
);

const nicknameDuplicateCheckSaga = createRequestSaga(
  NICKNAME_CHECK,
  authAPI.nicknameCheck,
);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LIST_TERMS, listTermsSaga);
  yield takeLatest(TERMS, termsSaga);
  yield takeLatest(SEND_SMS, sendSmsSaga);
  yield takeLatest(PASSWORD, passwordSaga);
  yield takeLatest(PASSWORD_UPDATE, passwordUpdateSaga);
  yield takeLatest(EMAIL_CHECK, emailDuplicateCheckSaga);
  yield takeLatest(NICKNAME_CHECK, nicknameDuplicateCheckSaga);
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
  termsDetail: '',
  passwordAuth: false,
  isPasswordUpdate: false,
  valid: {
    isNickname: undefined,
    nicknameErrorMesage: null,
    isEmail: undefined,
    emailErrorMesage: null,
  },
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
    // 약관 리스트 가져오기 성공
    [LIST_TERMS_SUCCESS]: (state, { payload: terms }) => ({
      ...state,
      authError: null,
      terms,
    }),
    // 약관 리스트 가져오기 실패
    [LIST_TERMS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 약관 가져오기 성공
    [TERMS_SUCCESS]: (state, { payload: termsDetail }) => ({
      ...state,
      authError: null,
      termsDetail,
    }),
    // 약관 가져오기 실패
    [TERMS_FAILURE]: (state, { payload: error }) => ({
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
    // 비밀번호 찾기 성공
    [PASSWORD_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.passwordAuth = true;
      }),
    // 비밀번호 찾기 실패
    [PASSWORD_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.authError = error;
        draft.passwordAuth = false;
      }),
    // 비밀번호 업데이트 성공
    [PASSWORD_UPDATE_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.isPasswordUpdate = true;
      }),
    // 비밀번호 찾기 실패
    [PASSWORD_UPDATE_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.authError = error;
        draft.isPasswordUpdate = false;
      }),
    // email 중복체크 성공
    [EMAIL_CHECK_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.valid.isEmail = payload.use === 0;
        draft.valid.emailErrorMesage =
          payload.use === 0
            ? '사용할 수 있는 이메일입니다'
            : '이미 등록되어 있는 이메일입니다';
      }),
    // email 중복체크 실패
    [EMAIL_CHECK_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.authError = error;
        draft.isEmail = null;
      }),
    // nickname 중복체크 성공
    [NICKNAME_CHECK_SUCCESS]: (state, { payload }) =>
      produce(state, draft => {
        draft.valid.isNickname = payload.use === 0;
        draft.valid.nicknameErrorMesage =
          payload.use === 0
            ? '사용할 수 있는 닉네임입니다'
            : '이미 등록되어 있는 닉네임입니다';
      }),
    // email 중복체크 실패
    [NICKNAME_CHECK_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.authError = error;
        draft.isNickname = null;
      }),
  },
  initialState,
);

export default auth;
