import React, { useState, useEffect, useContext } from 'react';
import AddPlayer from './components/AddPlayer';
import SocketContext from './context/SocketContext';

const App = () => {
  const [players, setPlayers] = useState([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    console.log(socket);

    if (socket) {
      socket.on('players', (data) => {
        console.log(data);
        setPlayers(data);
      });
    }
  }, [socket]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Players</h1>

      <ul>
        {players.map((player) => (
          <p key={player}>{player}</p>
        ))}
      </ul>
      <AddPlayer socket={socket} />
    </div>
  );
};

export default App;
