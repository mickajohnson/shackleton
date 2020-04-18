import React, { useContext } from 'react';
import PlayArea from '../PlayArea';
import YourHand from '../YourHand';
import Tasks from '../Tasks';
import TaskSelectionArea from '../TaskSelectionArea';
import PlayerContext from '../../context/PlayerContext';
import './GameScreen.css';
import GameContext, { TASK_SELECTION } from '../../context/GameContext';
import PlayerArea from '../PlayerArea';

const GameScreen = () => {
  const { whoseTurn, currentPlayer, playerNumbers } = useContext(PlayerContext);
  const { gamePhase } = useContext(GameContext);

  return (
    <div className="gameScreenContainer">
      <div className="topGameScreen">
        <div className="topPlayerContainer">
          <PlayerArea className="player2Area" player={playerNumbers[2]} orientation="top" />
        </div>
        <div className="middleGameScreen">
          <PlayerArea className="player1Area" player={playerNumbers[1]} orientation="left" />
          {gamePhase === TASK_SELECTION ? <TaskSelectionArea /> : <PlayArea />}
          <PlayerArea className="player3Area" player={playerNumbers[3]} orientation="right" />
        </div>
      </div>
      <p className="noMargin">{whoseTurn}'s Turn</p>
      <div className="currentPlayerContainer">
        <Tasks player={currentPlayer} />
      </div>
      <YourHand />
    </div>
  );
};

export default GameScreen;
