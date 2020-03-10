import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { put, takeLatest } from 'redux-saga/effects';

const OPEN_MODAL = 'base/OPEN_MODAL';
const CLOSE_MODAL = 'base/CLOSE_MODAL';
const SET_MODAL_SWICH = 'base/SET_MODAL_SWICH';
const SET_MODAL_DATA = 'base/SET_MODAL_DATA';

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);

export const setModalSwich = createAction(SET_MODAL_SWICH, ({ name, sw }) => ({
  name,
  sw,
}));
export const setModalData = createAction(SET_MODAL_DATA, payload => payload);

// saga 생성
function* openModalSaga({ payload }) {
  yield put(setModalData(payload));
  yield put(setModalSwich({ name: 'askModal', sw: true }));
}
function* closeModalSaga() {
  yield put(setModalSwich({ name: 'askModal', sw: false }));
  yield put(setModalData({}));
}
export function* baseSaga() {
  yield takeLatest(OPEN_MODAL, openModalSaga);
  yield takeLatest(CLOSE_MODAL, closeModalSaga);
}

const initialState = {
  modals: {},
  modalData: {},
};

const auth = handleActions(
  {
    [SET_MODAL_SWICH]: (state, { payload: { name, sw } }) =>
      produce(state, draft => {
        draft.modals[name] = !!sw;
      }),
    [SET_MODAL_DATA]: (state, { payload }) => {
      return produce(state, draft => {
        draft.modalData = payload;
      });
    },
  },
  initialState,
);

export default auth;
