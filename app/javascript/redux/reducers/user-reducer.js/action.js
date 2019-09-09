import Axios from 'axios';
import { history } from '../../store';
import { handleMessage } from '../flash-message-reducer/action';
import api from '../../../utils/api';

export const login = (email, password) => dispatch => {
  return api
    .post('/auth/sign_in', { email, password })
    .then(response => {
      console.log(response);
      sessionStorage.setItem(
        'user',
        JSON.stringify({
          'access-token': response.headers['access-token'],
          client: response.headers['client'],
          uid: response.data.data.uid
        })
      );
      history.push('/');
    })
    .catch(errors => {
      dispatch(handleMessage(errors.response.data.errors[0]));
    });
};
