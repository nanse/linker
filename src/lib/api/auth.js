import client from './client';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

// API 주소를 다른 곳으로 사용함
client.defaults.baseURL = REACT_APP_API_URL;
client.defaults.headers.common['authorization'] = '';
client.defaults.headers.common['hipId'] = '';
client.defaults.headers.common['osType'] = 'A';
client.defaults.headers.common['appVersion'] = '1.0.0';
client.defaults.headers.common['deviceId'] = '5b88bf1ac9cac646';
client.defaults.headers.common['accept-Language'] = 'ko-kr';

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
export const ping = () => client.get('/edu/svc/channelList?category=&limit=10');

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
