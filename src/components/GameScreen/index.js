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
    <div className="gameScreenContainer">
      {gamePhase === TASK_SELECTION ? <TaskSelectionArea /> : <PlayArea />}
      <p className="noMargin">{whoseTurn}'s Turn</p>
      <Tasks player={currentPlayer} />
      <YourHand />
    </div>
  );
};

export default GameScreen;
