import { SET_MESSAGE, RESET_MESSAGE } from './type';

const initialState = {
  message: ''
};

const flashMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        message: action.payload
      };
    case RESET_MESSAGE:
      return {
        message: ''
      };
    default:
      return state;
  }
};

export default flashMessageReducer;
