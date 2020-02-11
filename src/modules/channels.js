import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
// import * as postsAPI from '../lib/api/posts';  // SendBirdAction으로 변경.

import { takeLatest } from 'redux-saga/effects';

const [
  LIST_CHANNEL,
  LIST_CHANNEL_SUCCESS,
  LIST_CHANNEL_FAILURE,
] = createRequestActionTypes('posts/LIST_CHANNEL');

export const listPosts = createAction(
  LIST_CHANNEL,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listPostsSaga = createRequestSaga(LIST_CHANNEL, postsAPI.listPosts);
export function* postsSaga() {
  yield takeLatest(LIST_CHANNEL, listPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
};

const posts = handleActions(
  {
    [LIST_CHANNEL_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_CHANNEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts;
