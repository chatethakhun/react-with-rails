import Axios from 'axios';
import { history } from '../../store';
import { handleMessage } from '../flash-message-reducer/action';
import api from '../../../utils/api';

export const register = (email, password) => dispatch => {
  return api
    .post('/auth', { email, password })
    .then(response => {
        history.push('/')
        dispatch(handleMessage('Please confirm email before log in'))
    })
    .catch(errors => dispatch(handleMessage(errors.response.data.errors.full_messages[0])));
};

export const login = (email, password) => dispatch => {
  return api
    .post('/auth/sign_in', { email, password })
    .then(response => {
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          'access-token': response.headers['access-token'],
          client: response.headers['client'],
          uid: response.data.data.uid
        })
      );
      window.location = '/';
    })
    .catch(errors => {
      dispatch(handleMessage(errors.response.data.errors[0]));
    });
};

export const logout = () => dispatch => {
  return api
    .delete('/auth/sign_out')
    .then(() => {
      sessionStorage.removeItem('user');
      window.location = '/';
    })
    .catch(errors => handleMessage(errors.response.data.errors[0]));
};
