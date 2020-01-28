import React from 'react';
import './App.css';
import { Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login' >Login</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/login' />
      </Switch>
    </div>
  );
}

export default App;
