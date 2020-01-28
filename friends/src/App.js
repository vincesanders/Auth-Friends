import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import { Login } from './components';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login' >Login</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/login' ><Login /></Route>
      </Switch>
    </div>
  );
}

export default App;
