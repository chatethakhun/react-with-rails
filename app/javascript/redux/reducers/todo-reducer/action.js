import axios from 'axios';
import {
  SET_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE,
  GET_TODOS,
  GET_TODO
} from './type';
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

const getDatas = todos => ({
  type: GET_TODOS,
  data: todos
});

const getData = todo => ({
  type: GET_TODO,
  data: todo
});

export const getTodos = () => dispatch => {
  return axios.get('/todos.json').then(response => {
    dispatch(getDatas(response.data));
  });
};

export const getTodo = todoId => dispatch => {
  return axios.get(`/todos/${todoId}.json`).then(response => {
    dispatch(getData(response.data));
  });
};

export const addTodo = (text, description) => {
  return dispatch => {
    return axios
      .post('/todos.json', { text, description })
      .then(response => {
        history.push('/');
      })
      .catch(error => {
        dispatch(invalidData(error.response.data));
      });
  };
};

export const deleteTodo = id => dispatch => {
  return axios
    .delete(`/todos/${id}.json`)
    .then(() => dispatch(getTodos()))
    .catch(error => {});
};

export const resetErrorMessage = () => {
  return dispatch => dispatch(setErrorMessage());
};
