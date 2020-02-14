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

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  channel,
  message,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    channelSaga(),
    messageSaga(),
  ]);
}

export default rootReducer;
