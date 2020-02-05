import React from 'react';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GameScreen from './components/GameScreen';

function App() {
  return (
    <Router>
    <div className="App">
      <ul className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Play here!</Link>
      </ul>

      <div>Haven't registered yet?....</div>
      <Route path="login" component={Login} />
      <PrivateRoute path="/dashboard" component={GameScreen} />
    </div>
    </Router>
  );
}

export default App;
