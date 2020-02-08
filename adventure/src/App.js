import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GameContainer from './components/GameContainer';

function App() {
 const [usercreds, setUserCreds] = useState();
  
 useEffect(() => { 

 }, [usercreds]);

  return (
    <Router>
    <div className="App">
      <ul className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Play here!</Link>
      </ul>

    <h1>Escape From The Cave!</h1>
      
      <Route path="/login" render={(props) => (<Login {...props} setUserCreds={setUserCreds}/>)}  />
      <Route path="/register" render={(props) => (<Register {...props} setUserCreds={setUserCreds}/>) }   />
      <PrivateRoute path="/dashboard" component={GameContainer} usercreds={usercreds}/>
    </div>
    </Router>
  );
}

export default App;
