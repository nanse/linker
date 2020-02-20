import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
// messager
import channel, { channelSaga } from './channel';
import message, { messageSaga } from './message';
import base, { baseSaga } from './base';
import record, { recordSaga } from './record';

const rootReducer = combineReducers({
  base,
  auth,
  channel,
  message,
  record,
  loading,
  user,
  write,
  post,
  posts,
});

export function* rootSaga() {
  yield all([
    baseSaga(),
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    channelSaga(),
    messageSaga(),
    recordSaga(),
  ]);
}

export default rootReducer;
