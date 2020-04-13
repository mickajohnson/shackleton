import React, { useContext } from 'react';
import PlayArea from '../PlayArea';
import YourHand from '../YourHand';
import PlayerContext from '../../context/PlayerContext';
import './GameScreen.css';

const GameScreen = () => {
  const { whoseTurn } = useContext(PlayerContext);

  return (
    <div className="playerContainer">
      <h2 className="App-header">Play Area</h2>
      <h3>{whoseTurn}'s Turn</h3>
      <PlayArea />
      <YourHand />
    </div>
  );
};

export default GameScreen;
