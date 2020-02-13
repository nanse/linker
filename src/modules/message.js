import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as messageAPI from '../lib/api/message'; // SendBirdAction으로 변경.

import { takeLatest, put, call } from 'redux-saga/effects';

const [
  LIST_MESSAGE,
  LIST_MESSAGE_SUCCESS,
  LIST_MESSAGE_FAILURE,
] = createRequestActionTypes('channel/LIST_CHANNEL');

// Actions
export const listMessage = createAction(LIST_MESSAGE, channel => channel);

// Sagas
const listMessageSaga = createRequestSaga(LIST_MESSAGE, messageAPI.listChannel);

// Watchers
export function* messageSaga() {
  yield takeLatest(LIST_MESSAGE, listMessageSaga);
}

const initialState = {
  messages: null,
  error: null,
};

const message = handleActions(
  {
    [LIST_MESSAGE_SUCCESS]: (state, { payload: messages }) => {
      console.log('> modules list channels:', messages);
      return {
        ...state,
        messages,
      };
    },
    [LIST_MESSAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default message;
