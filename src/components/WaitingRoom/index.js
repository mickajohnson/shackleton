import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import { NoClickOutlineButton } from '../NoClickOutline';

const WatingRoom = () => {
  const { onPlayAgainClick } = useContext(GameContext);

  return (
    <div className="centeredContainer">
      <h1>Game In Progress</h1>
      <NoClickOutlineButton className="startButton" onClick={onPlayAgainClick}>
        Kill Game
      </NoClickOutlineButton>
    </div>
  );
};

export default WatingRoom;
