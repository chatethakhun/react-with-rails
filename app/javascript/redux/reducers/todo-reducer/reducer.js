import { SET_ERROR_MESSAGE, RESET_ERROR_MESSAGE } from './type';

const initialState = {
  errorText: '',
  errorDescription: ''
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return {
        errorText: action.data.text,
        errorDescription: action.data.description
      };
    case RESET_ERROR_MESSAGE:
      return initialState;
    default:
      return {
        ...state
      };
  }
};

export default todoReducer;
