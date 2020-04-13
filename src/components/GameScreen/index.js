import React from 'react';
import PlayArea from '../PlayArea';
import YourHand from '../YourHand';
import './GameScreen.css';

const GameScreen = () => {
  return (
    <div className="playerContainer">
      <h2 className="App-header">Play Area</h2>
      <PlayArea />
      <YourHand />
    </div>
  );
};

export default GameScreen;
