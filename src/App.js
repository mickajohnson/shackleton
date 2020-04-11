import React, { useContext } from 'react';
import PlayerScreen from './components/PlayerScreen';
import GameScreen from './components/GameScreen';
import GameContext from './context/GameContext';

const App = () => {
  const { gameStarted } = useContext(GameContext);

  return (
    <div style={{ textAlign: 'center' }}>{gameStarted ? <GameScreen /> : <PlayerScreen />}</div>
  );
};

export default App;
