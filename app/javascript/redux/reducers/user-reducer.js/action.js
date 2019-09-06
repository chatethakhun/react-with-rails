import Axios from 'axios';

export const login = (email, password) => dispatch => {
  return Axios.post('/users.json', { email, password }).then(response => {
    console.log(response);
  });
};
