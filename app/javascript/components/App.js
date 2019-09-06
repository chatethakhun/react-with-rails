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

const App = () => {
  const flash = useSelector(state => state.flash.message);
  return (
    <div className="app">
      <NavbarHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/todo" component={AddTodo} />
        <Route exact path="/todo/:id" component={ShowTodo} />
        <Route exact path="/todo/edit/:id" component={UpdateTodo} />
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
