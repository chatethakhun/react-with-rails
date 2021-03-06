import { combineReducers } from 'redux';
import todoReducer from './todo-reducer/reducer';
import { connectRouter } from 'connected-react-router';
import flashMessageReducer from './flash-message-reducer/reducer';
import userReducer from './user-reducer.js/reducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    todo: todoReducer,
    flash: flashMessageReducer,
    user: userReducer
  });

export default createRootReducer;
