import axios from 'axios';
import { SET_ERROR_MESSAGE, RESET_ERROR_MESSAGE } from './type';
import { history } from '../../store';

const invalidData = errors => {
  return {
    type: SET_ERROR_MESSAGE,
    data: errors
  };
};

const setErrorMessage = () => {
  return {
    type: RESET_ERROR_MESSAGE
  };
};

export const addTodo = (text, description) => {
  return dispatch => {
    return axios
      .post('/todos', { text, description })
      .then(response => {
        history.push('/');
      })
      .catch(error => {
        dispatch(invalidData(error.response.data));
      });
  };
};

export const resetErrorMessage = () => {
  return dispatch => dispatch(setErrorMessage());
};
