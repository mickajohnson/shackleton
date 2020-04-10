import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import SocketContext from './SocketContext';

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
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

  const addPlayer = useCallback(
    (name) => {
      socket.emit('addPlayer', name);
      setCurrentPlayer(name);
    },
    [socket]
  );

  const state = {
    currentPlayer,
    players,
    addPlayer,
  };

  return <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>;
};

export default PlayerContext;
