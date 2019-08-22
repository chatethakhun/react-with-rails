import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavbarHeader from './organism/Nav';
import AddTodo from './pages/AddTodo';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-todo" component={AddTodo} />
        </Switch>
      </div>
    );
  }
}

export default App;
