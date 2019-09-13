import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarHeader from './organism/Nav';
import AddTodo from './pages/AddTodo';
import Home from './pages/Home';
import ShowTodo from './pages/ShowTodo';
import UpdateTodo from './pages/UpdateTodo';

import { Toast } from 'react-bootstrap';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './atoms/private-route';

const App = () => {
  const flash = useSelector(state => state.flash.message);
  return (
    <div className="app">
      <NavbarHeader />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/todo" component={AddTodo} />
        <PrivateRoute exact path="/todo/:id" component={ShowTodo} />
        <PrivateRoute exact path="/todo/edit/:id" component={UpdateTodo} />
      </Switch>
      {flash != '' && (
        <Toast className="flash-message">
          <Toast.Body>{flash}</Toast.Body>
        </Toast>
      )}
    </div>
  );
};

export default App;
