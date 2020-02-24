import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import createRequestSendbirdSaga from '../lib/createRequestSendbirdSaga';
import * as channelAPI from '../lib/api/channel'; // SendBirdAction으로 변경.

import { takeLatest, put, call } from 'redux-saga/effects';
// import { listMessage } from './message';

const [
  LIST_CHANNEL,
  LIST_CHANNEL_SUCCESS,
  LIST_CHANNEL_FAILURE,
] = createRequestActionTypes('channel/LIST_CHANNEL');

const [
  ENTER_CHANNEL,
  ENTER_CHANNEL_SUCCESS,
  ENTER_CHANNEL_FAILURE,
] = createRequestActionTypes('channel/ENTER_CHANNEL');

const [
  GET_CHANNEL,
  GET_CHANNEL_SUCCESS,
  GET_CHANNEL_FAILURE,
] = createRequestActionTypes('channel/ENTER_CHANNEL');

// Actions
export const listChannel = createAction(
  LIST_CHANNEL,
  ({ isInit, urlKeyword }) => ({ isInit, urlKeyword }),
);
export const enter = createAction(ENTER_CHANNEL, url => url);
export const getChannel = createAction(GET_CHANNEL, url => url);

// Sagas
const listChanelSaga = createRequestSendbirdSaga(
  LIST_CHANNEL,
  channelAPI.listChannel,
);

function* enterSaga(action) {
  try {
    const { payload } = action;
    // 1. enter
    yield call(channelAPI.enter, payload);

    // 2. getChannel
    const channel = yield call(channelAPI.getChannel, payload);
    yield put({
      type: GET_CHANNEL_SUCCESS,
      payload: channel,
    });

    // 3. getMessage
    // yield put(listMessage({ channel }));
  } catch (e) {
    console.error(e);
    yield put({
      type: ENTER_CHANNEL_FAILURE,
      error: e,
    });
  }
}

// Watchers
export function* channelSaga() {
  yield takeLatest(LIST_CHANNEL, listChanelSaga);
  yield takeLatest(ENTER_CHANNEL, enterSaga);
}

const initialState = {
  channels: [],
  channel: null,
  error: null,
};

export default handleActions(
  {
    // 채널리스트 성공
    // [LIST_CHANNEL_SUCCESS]: (state, { payload: channels }) => {
    //   produce(state, draft => {
    //     channels.forEach(channel => {
    //       draft.channels.push(channel);
    //     });
    //   });
    // },
    [LIST_CHANNEL_SUCCESS]: (state, { payload: channels }) => ({
      ...state,
      channels,
    }),
    [LIST_CHANNEL_FAILURE]: (state, { payload: error }) =>
      produce(state, draft => {
        draft.error = error;
      }),
    [ENTER_CHANNEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_CHANNEL_SUCCESS]: (state, { payload: channel }) => ({
      ...state,
      channel,
    }),
    [GET_CHANNEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);
