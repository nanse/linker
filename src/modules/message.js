import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes } from '../lib/createRequestSaga';

import createRequestSendbirdSaga from '../lib/createRequestSendbirdSaga';
import * as messageAPI from '../lib/api/message'; // SendBirdAction으로 변경.

import { takeLatest } from 'redux-saga/effects';

const [
  LIST_MAIN_MESSAGE,
  LIST_MAIN_MESSAGE_SUCCESS,
  LIST_MAIN_MESSAGE_FAILURE,
] = createRequestActionTypes('message/LIST_MAIN_MESSAGE');

const [
  LIST_OTHER_MESSAGE,
  LIST_OTHER_MESSAGE_SUCCESS,
  LIST_OTHER_MESSAGE_FAILURE,
] = createRequestActionTypes('message/LIST_OTHER_MESSAGE');

// Actions
export const listMainMessage = createAction(
  LIST_MAIN_MESSAGE,
  ({ channel, isInit = true, customType = 'main' }) => ({
    channel,
    isInit,
    customType,
  }),
);
export const listOtherMessage = createAction(
  LIST_OTHER_MESSAGE,
  ({ channel, isInit = true, customType = 'other' }) => ({
    channel,
    isInit,
    customType,
  }),
);

// Sagas
const listMainMessageSaga = createRequestSendbirdSaga(
  LIST_MAIN_MESSAGE,
  messageAPI.listMessage,
);

const listOtherMessageSaga = createRequestSendbirdSaga(
  LIST_OTHER_MESSAGE,
  messageAPI.listMessage,
);

// Watchers
export function* messageSaga() {
  yield takeLatest(LIST_MAIN_MESSAGE, listMainMessageSaga);
  yield takeLatest(LIST_OTHER_MESSAGE, listOtherMessageSaga);
}

const initialState = {
  mainMessages: [],
  otherMessages: [],
  error: null,
};

const message = handleActions(
  {
    [LIST_MAIN_MESSAGE_SUCCESS]: (state, { payload: mainMessages }) => {
      console.log('> modules LIST_MAIN_MESSAGE_SUCCESS:', mainMessages);
      return {
        ...state,
        mainMessages,
      };
    },
    [LIST_MAIN_MESSAGE_FAILURE]: (state, { payload: error }) => {
      console.error(error);
      return {
        ...state,
        error,
      };
    },
    [LIST_OTHER_MESSAGE_SUCCESS]: (state, { payload: otherMessages }) => {
      console.log('> modules LIST_OTHER_MESSAGE_SUCCESS:', otherMessages);
      return {
        ...state,
        otherMessages,
      };
    },
    [LIST_OTHER_MESSAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default message;
