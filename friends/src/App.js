import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
// import Friends from './components/Friends';
import CopyFriendForm from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/protected' component={CopyFriendForm} />
        </header>
      </div>
    </Router>
  );
}

export default App;
