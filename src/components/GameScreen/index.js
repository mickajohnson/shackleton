import React, { useContext } from 'react';
import PlayArea from '../PlayArea';
import YourHand from '../YourHand';
import TaskSelectionArea from '../TaskSelectionArea';
import PlayerContext from '../../context/PlayerContext';
import './GameScreen.css';
import GameContext, { TASK_SELECTION } from '../../context/GameContext';

const GameScreen = () => {
  const { whoseTurn, currentPlayer } = useContext(PlayerContext);
  const { gamePhase } = useContext(GameContext);

  return (
    <div className="playerContainer">
      <h1>You are {currentPlayer}</h1>
      <h2 className="App-header">Play Area</h2>
      <h3>{whoseTurn}'s Turn</h3>
      {gamePhase === TASK_SELECTION ? <TaskSelectionArea /> : <PlayArea />}
      <YourHand />
    </div>
  );
};

export default GameScreen;
