import React, { useContext } from 'react';
import PlayArea from '../PlayArea';
import YourHand from '../YourHand';
import Tasks from '../Tasks';
import TaskSelectionArea from '../TaskSelectionArea';
import CommunicatorLocation from '../CommunicatorLocation';
import PlayerContext from '../../context/PlayerContext';
import './GameScreen.css';
import GameContext, { TASK_SELECTION } from '../../context/GameContext';
import PlayerArea from '../PlayerArea';
import Announcement from '../Announcement';

const GameScreen = () => {
  const { currentPlayer, playerNumbers } = useContext(PlayerContext);
  const { gamePhase, pickCommLocation } = useContext(GameContext);

  const renderMiddleArea = () => {
    if (gamePhase === TASK_SELECTION) {
      return <TaskSelectionArea />;
    }
    if (pickCommLocation) return <CommunicatorLocation />;
    return <PlayArea />;
  };

  return (
    <div className="gameScreenContainer">
      <div className="topGameScreen">
        <div className="topPlayerContainer">
          {playerNumbers[2] ? (
            <PlayerArea className="player2Area" player={playerNumbers[2]} orientation="top" />
          ) : null}
        </div>
        <div className="middleGameScreen">
          {playerNumbers[1] ? (
            <PlayerArea className="player1Area" player={playerNumbers[1]} orientation="left" />
          ) : null}
          {renderMiddleArea()}
          {playerNumbers[3] ? (
            <PlayerArea className="player3Area" player={playerNumbers[3]} orientation="right" />
          ) : null}
        </div>
      </div>
      <Announcement />
      <div className="currentPlayerContainer">
        <Tasks player={currentPlayer} />
      </div>
      <YourHand />
    </div>
  );
};

export default GameScreen;
