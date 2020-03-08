import axios from 'axios';

const client = axios.create();

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

// API 주소를 다른 곳으로 사용함
client.defaults.baseURL = REACT_APP_API_URL;

/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 

  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/

client.interceptors.request.use(function(config) {
  const a = sessionStorage.getItem('auth');
  const auth = a ? JSON.parse(a) : null;
  if (auth) {
    // console.log('> sessionStorage: auth: ', auth.token);
    config.headers.common['authorization'] = auth.token;
    config.headers.common['hipId'] = auth.hipId;
  }
  config.headers.common['osType'] = 'A';
  config.headers.common['appVersion'] = '1.0.0';
  config.headers.common['deviceId'] = '5b88bf1ac9cac646';
  config.headers.common['accept-Language'] = 'ko-kr';
  return config;
});

export default client;
