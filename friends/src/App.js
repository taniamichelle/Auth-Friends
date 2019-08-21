import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path='/login' component={Login} />
          <ProtectedRoute path='/friends' component={Friends} />
        </header>
      </div>
    </Router>
  );
}

export default App;


/*
HENRY'S:

import React from 'react';
import './App.css';
import { Route, Link, Redirect } from 'react-router-dom';

import Login from './components/Login';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to='/login'/>;
    }
};

const ProtectedFriends= protectRoute(Friends);

function App() {
  return (
    <div className='App'>
      <Route path='/login' component={Login} />
      <ProtectedRoute path='/friends' component={Friends} />
    </div>
  );
}

export default App;

*/