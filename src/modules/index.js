import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import channel, { channelSaga } from './channel';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  channel,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    channelSaga(),
  ]);
}

export default rootReducer;
