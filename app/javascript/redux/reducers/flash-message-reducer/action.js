import { SET_MESSAGE, RESET_MESSAGE } from './type';

const setMessage = message => ({
  type: SET_MESSAGE,
  payload: message
});

const resetMessage = () => ({
  type: RESET_MESSAGE
});

export const handleMessage = message => dispatch => {
  dispatch(resetMessage());
  dispatch(setMessage(message));
};
