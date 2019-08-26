import {
  SET_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE,
  GET_TODOS,
  GET_TODO
} from './type';

const initialState = {
  errorText: '',
  errorDescription: '',
  todos: [],
  todo: null
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
    case GET_TODOS:
      return {
        ...state,
        todos: action.data
      };
    case GET_TODO:
      return {
        ...state,
        todo: action.data
      };
    default:
      return {
        ...state
      };
  }
};

export default todoReducer;
