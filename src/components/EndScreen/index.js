import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import { NoClickOutlineButton } from '../NoClickOutline';
import './EndScreen.css';

const EndScreen = () => {
  const { gamePhase, onPlayAgainClick } = useContext(GameContext);

  return (
    <div className="centeredContainer">
      <h1>YOU {gamePhase}</h1>
      <NoClickOutlineButton className="startButton" onClick={onPlayAgainClick}>
        Play Again
      </NoClickOutlineButton>
    </div>
  );
};

export default EndScreen;
