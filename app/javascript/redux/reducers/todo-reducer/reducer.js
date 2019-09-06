import {
  SET_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE,
  GET_TODOS,
  GET_TODO,
  SET_VALUE
} from './type';

const initialState = {
  errorText: '',
  errorDescription: '',
  todos: [],
  todo: null,
  text: '',
  description: '',
  flash: []
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
    case SET_VALUE:
      return {
        ...state,
        [action.key]: action.value
      };
    default:
      return {
        ...state
      };
  }
};

export default todoReducer;
