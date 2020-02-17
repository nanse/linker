import client from './client';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

// API 주소를 다른 곳으로 사용함
client.defaults.baseURL = REACT_APP_API_URL;

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 회원가입 후, 로그인
export const register = ({
  type,
  accountType,
  emailId,
  password,
  nickname,
  mentorYn,
  profileImg,
  pushKey,
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
  });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
