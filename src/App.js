import React, { useContext } from 'react';
import PlayerScreen from './components/PlayerScreen';
import GameScreen from './components/GameScreen';
import GameContext, { SIGN_IN } from './context/GameContext';

const App = () => {
  const { gamePhase } = useContext(GameContext);

  return (
    <div style={{ textAlign: 'center' }}>
      {gamePhase === SIGN_IN ? <PlayerScreen /> : <GameScreen />}
    </div>
  );
};

export default App;
