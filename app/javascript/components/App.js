import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavbarHeader from './organism/Nav';
import AddTodo from './pages/AddTodo';
import Home from './pages/Home';
import ShowTodo from './pages/ShowTodo';
import UpdateTodo from './pages/UpdateTodo';

const App = () => {
  return (
    <div>
      <NavbarHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={AddTodo} />
        <Route exact path="/todo/:id" component={ShowTodo} />
        <Route exact path="/todo/edit/:id" component={UpdateTodo} />
      </Switch>
    </div>
  );
};

export default App;
