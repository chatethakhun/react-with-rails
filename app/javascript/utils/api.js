import axios from 'axios';

const api = axios.create({
  headers: JSON.parse(sessionStorage.getItem('user'))
});

export default api;
