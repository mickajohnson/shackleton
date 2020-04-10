import React, { useContext } from 'react';
import AddPlayer from './components/AddPlayer';
import PlayerContext from './context/PlayerContext';

const App = () => {
  const { players, currentPlayer } = useContext(PlayerContext);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Players</h1>

      <ul>
        {players.map((player) => (
          <p key={player}>{player}</p>
        ))}
      </ul>
      {currentPlayer ? <p>You are: {currentPlayer}</p> : <AddPlayer />}
    </div>
  );
};

export default App;
