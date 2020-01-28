import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import { Login, PrivateRoute } from './components';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login' >Login</Link>
        </li>
        <li>
          <Link to='/protected' >Protected</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='/protected' />
        <Route path='/login' ><Login /></Route>
        <Route><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
