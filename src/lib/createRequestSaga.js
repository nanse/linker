import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';
import findErrorMessage from './errorMessage';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  // console.log(' > createRequestSaga: ', type);
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    yield put(startLoading(type)); // 로딩 시작
    // console.log('> request:', type);
    // console.log('> request > payload:', action.payload);
    try {
      const response = yield call(request, action.payload);
      // console.log(`> ${type}] ${response}`); ₩+-

      if (response.data.resultCode === 0) {
        yield put({
          type: SUCCESS,
          payload: response.data,
        });
      } else {
        let { resultCode, resultText } = response.data;
        resultText = resultText ? resultText : findErrorMessage(resultCode);
        yield put({
          type: FAILURE,
          payload: { resultCode, resultText },
          error: true,
        });
      }
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
