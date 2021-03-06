import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as recordAPI from '../lib/api/record';

// const CHANGE_FIELD = 'record/CHANGE_FIELD';
// const INITIALIZE_FORM = 'record/INITIALIZE_FORM';

const [
  UPLOAD_RECORD,
  UPLOAD_RECORD_SUCCESS,
  UPLOAD_RECORD_FAILURE,
] = createRequestActionTypes('record/UPLOAD_RECORD');

const [
  MENTO_DOCS,
  MENTO_DOCS_SUCCESS,
  MENTO_DOCS_FAILURE,
] = createRequestActionTypes('record/MENTO_DOCS');

export const uploadRecord = createAction(
  UPLOAD_RECORD,
  ({ fileFormData, pdfPassword }) => ({
    fileFormData,
    pdfPassword,
  }),
);

export const docs = createAction(MENTO_DOCS);

// saga 생성
const uploadRecordSaga = createRequestSaga(
  UPLOAD_RECORD,
  recordAPI.uploadRecord,
);
const mentoDocsSaga = createRequestSaga(MENTO_DOCS, recordAPI.mentoDocs);

export function* recordSaga() {
  yield takeLatest(UPLOAD_RECORD, uploadRecordSaga);
  yield takeLatest(MENTO_DOCS, mentoDocsSaga);
}

const initialState = {
  record: null,
  mentoDocs: null,
  recordError: null,
};

const record = handleActions(
  {
    // 생기부 업로드 성공
    [UPLOAD_RECORD_SUCCESS]: (state, { payload: record }) => ({
      ...state,
      recordError: null,
      record,
    }),
    // 생기부 업로드 실패
    [UPLOAD_RECORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      recordError: error,
    }),

    // Mentodocs 성공
    [MENTO_DOCS_SUCCESS]: (state, { payload: mentoDocs }) => ({
      ...state,
      recordError: null,
      mentoDocs,
    }),
    // Mentodocs 실패
    [MENTO_DOCS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      recordError: error,
    }),
  },
  initialState,
);

export default record;
