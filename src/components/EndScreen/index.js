import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';

const EndScreen = () => {
  const { gamePhase } = useContext(GameContext);

  return (
    <div>
      <h1>YOU {gamePhase}</h1>
    </div>
  );
};

export default EndScreen;
