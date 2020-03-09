import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입 후, 로그인
export const register = ({
  type = 'REGIST',
  accountType = 0,
  emailId,
  password,
  nickname,
  mentorYn = 'Y',
  profileImg = '',
  pushKey = '',
  phoneNumber,
  smsConfirmCd,
  agreementTerms,
}) =>
  client.post('/auth/svc/registerAndLogin', {
    type,
    accountType,
    emailId,
    password,
    nickname,
    mentorYn,
    profileImg,
    pushKey,
    phoneNumber,
    smsConfirmCd,
    agreementTerms,
  });

// 약관 리스트
export const listTerms = () => client.get('/auth/api/retrieveTerms');
export const terms = ({ termsNo }) =>
  client.get(`/auth/api/retrieveTerms?termsNo=${termsNo}`);

// 휴대폰인증
export const sendSms = ({ phoneNumber }) =>
  client.post('/auth/svc/sendSecretCode', {
    phoneNumber,
  });

// 로그인 상태 확인
export const ping = () => client.get('/edu/svc/channelList?category=&limit=10');

// 비밀번호 찾기
export const password = ({ phoneNumber, emailId, smsConfirmCd }) =>
  client.get(
    `auth/api/retrieveAccount?phoneNumber=${phoneNumber}&emailId=${emailId}&smsConfirmCode=${smsConfirmCd}`,
  );

// 비밀번호 업데이트
export const passwordUpdate = ({ password }) =>
  client.post('/auth/api/updatePassword', {
    password,
  });

// email 중복체크
export const emailCheck = ({ email }) =>
  client.get(`/auth/api/retrieveEmail?emailId=${email}`);

// nickname 중복체크
export const nicknameCheck = ({ nickname }) =>
  client.get(`/auth/api/retrieveNickname?nickname=${nickname}`);

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
