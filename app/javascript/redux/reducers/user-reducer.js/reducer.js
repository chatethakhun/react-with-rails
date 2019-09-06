import { LOGIN } from './type';

const initial = {
  login: false
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
