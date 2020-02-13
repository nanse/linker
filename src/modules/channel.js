import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as channelAPI from '../lib/api/channel'; // SendBirdAction으로 변경.

import { takeLatest, put, call } from 'redux-saga/effects';

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
const listChanelSaga = createRequestSaga(LIST_CHANNEL, channelAPI.listChannel);
// const enterRequest = createRequestSaga(ENTER_CHANNEL, channelAPI.enter);
function* enterSaga(action) {
  try {
    const { payload } = action;
    // 1. enter
    const result = yield call(channelAPI.enter, payload);
    yield put({
      type: ENTER_CHANNEL_SUCCESS,
      data: result,
    });

    // 2. getChannel
    console.log('>11111111', payload);
    const channel = yield call(channelAPI.getChannel, payload);
    console.log('>>', channel);
    yield put({
      type: GET_CHANNEL_SUCCESS,
      data: channel,
    });

    // 3. getMessage
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
  channels: null,
  channel: null,
  error: null,
};

const channel = handleActions(
  {
    [LIST_CHANNEL_SUCCESS]: (state, { payload: channels }) => {
      console.log('> modules list channels:', channels);
      return {
        ...state,
        channels,
      };
    },
    [LIST_CHANNEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [ENTER_CHANNEL_SUCCESS]: (state, { payload: channel }) => {
      console.log('> modules enter:', channel);
      return {
        ...state,
        channel,
      };
    },
    [ENTER_CHANNEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_CHANNEL_SUCCESS]: (state, { payload: channel }) => {
      console.log('> modules getChannel:', channel);
      return {
        ...state,
        channel,
      };
    },
    [GET_CHANNEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default channel;
