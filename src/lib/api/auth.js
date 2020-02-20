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
