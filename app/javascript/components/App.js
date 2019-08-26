import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavbarHeader from './organism/Nav';
import AddTodo from './pages/AddTodo';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <NavbarHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={AddTodo} />
      </Switch>
    </div>
  );
};

export default App;
