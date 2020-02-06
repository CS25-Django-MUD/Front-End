import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GameContainer from './components/GameContainer';

function App() {
  return (
    <Router>
    <div className="App">
      <ul className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Play here!</Link>
      </ul>

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/dashboard" component={GameContainer} />
    </div>
    </Router>
  );
}

export default App;
