import React from 'react';
import './App.css';
import GameScreen from './components/GameScreen';

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li><a href="">Home</a></li>
        <li><a href="">Register</a></li>
        <li><a href="">Login</a></li>
      </ul>
      <GameScreen />
    </div>
  );
}

export default App;
