import React, { useContext } from 'react';
import PlayArea from '../PlayArea';
import YourHand from '../YourHand';
import Tasks from '../Tasks';
import TaskSelectionArea from '../TaskSelectionArea';
import PlayerContext from '../../context/PlayerContext';
import './GameScreen.css';
import GameContext, { TASK_SELECTION } from '../../context/GameContext';

const GameScreen = () => {
  const { whoseTurn, currentPlayer } = useContext(PlayerContext);
  const { gamePhase } = useContext(GameContext);

  return (
    <div className="playerContainer">
      <h1 className="App-header">You are {currentPlayer}</h1>
      <h2 className="App-header">Play Area</h2>
      <h3>{whoseTurn}'s Turn</h3>
      {gamePhase === TASK_SELECTION ? <TaskSelectionArea /> : <PlayArea />}
      <YourHand />
      <Tasks player={currentPlayer} />
    </div>
  );
};

export default GameScreen;
