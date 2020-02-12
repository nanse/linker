import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as channelAPI from '../lib/api/channel'; // SendBirdAction으로 변경.

import { takeLatest } from 'redux-saga/effects';

const [
  LIST_CHANNEL,
  LIST_CHANNEL_SUCCESS,
  LIST_CHANNEL_FAILURE,
] = createRequestActionTypes('channel/LIST_CHANNEL');

export const listChannels = createAction(
  LIST_CHANNEL,
  ({ isInit, urlKeyword }) => ({ isInit, urlKeyword }),
);

const listPostsSaga = createRequestSaga(
  LIST_CHANNEL,
  channelAPI.listOpenChannel,
);
export function* channelSaga() {
  yield takeLatest(LIST_CHANNEL, listPostsSaga);
}

const initialState = {
  channels: null,
  error: null,
};

const channel = handleActions(
  {
    [LIST_CHANNEL_SUCCESS]: (state, { payload: channels, meta: response }) => {
      console.log('> modules channels:', channels);
      return {
        ...state,
        channels,
      };
    },
    [LIST_CHANNEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default channel;
