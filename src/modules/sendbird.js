import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_CONNECTION = 'sendbird/CHANGE_CONNECTION';

export const changeConnection = createAction(
  CHANGE_CONNECTION,
  isConnection => isConnection,
);

const initialState = {
  isConnection: false,
};

const sendbird = handleActions(
  {
    [CHANGE_CONNECTION]: (state, { payload }) =>
      produce(state, draft => {
        draft.isConnection = payload;
      }),
  },
  initialState,
);

export default sendbird;
