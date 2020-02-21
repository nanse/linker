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

export const uploadRecord = createAction(
  UPLOAD_RECORD,
  ({ fileFormData, pdfPassword }) => ({
    fileFormData,
    pdfPassword,
  }),
);

// saga 생성
const uploadRecordSaga = createRequestSaga(
  UPLOAD_RECORD,
  recordAPI.uploadRecord,
);

export function* recordSaga() {
  yield takeLatest(UPLOAD_RECORD, uploadRecordSaga);
}

const initialState = {
  record: null,
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
  },
  initialState,
);

export default record;
