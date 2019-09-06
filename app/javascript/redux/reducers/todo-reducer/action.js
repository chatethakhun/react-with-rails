import axios from 'axios';
import {
  SET_ERROR_MESSAGE,
  RESET_ERROR_MESSAGE,
  GET_TODOS,
  GET_TODO,
  SET_VALUE
} from './type';
import { history } from '../../store';
import { handleMessage } from '../flash-message-reducer/action';

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

const setValue = (key, value) => ({
  type: SET_VALUE,
  key,
  value
});

export const getTodos = () => dispatch => {
  return axios.get('/todos.json').then(response => {
    dispatch(getDatas(response.data));
  });
};

export const getTodo = todoId => dispatch => {
  return axios.get(`/todos/${todoId}.json`).then(response => {
    dispatch(setValue('text', response.data.text));
    dispatch(setValue('description', response.data.description));
  });
};

export const addTodo = (text, description) => {
  return dispatch => {
    return axios
      .post('/todos.json', { text, description })
      .then(response => {
        dispatch(handleMessage(response.data.message));
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
    .then(response => {
      dispatch(handleMessage(response.data.message));
      dispatch(getTodos());
    })
    .catch(error => {});
};

export const updateTodo = todo => dispatch => {
  return axios
    .put(`/todos/${todo.id}.json`, {
      text: todo.text,
      description: todo.description
    })
    .then(response => {
      dispatch(setValue('flash', []));
      const flashMessage = response.data.message;
      dispatch(handleMessage(flashMessage));
      history.push('/');
    });
};
export const resetErrorMessage = () => {
  return dispatch => dispatch(setErrorMessage());
};

export const setTodo = (key, value) => dispatch =>
  dispatch(setValue(key, value));
