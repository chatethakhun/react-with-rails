import { combineReducers } from 'redux';
import todoReducer from './todo-reducer/reducer';
import { connectRouter } from 'connected-react-router';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    todo: todoReducer
  });

export default createRootReducer;
