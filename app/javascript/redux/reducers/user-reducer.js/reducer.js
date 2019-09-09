import { LOGIN } from './type';

const initial = {
  login: sessionStorage.getItem('user') !== null
};

const userReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        login: true
      };

    default:
      return state;
  }
};

export default userReducer;
