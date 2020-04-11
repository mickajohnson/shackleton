import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import SocketContext from './SocketContext';

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [players, setPlayers] = useState([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    // const player = localStorage.getItem('player');
    const player = null;
    if (players.length > 0 && player && !currentPlayer) {
      setCurrentPlayer(player);
    }
  }, [players, currentPlayer]);

  useEffect(() => {
    if (players.length === 0) {
      localStorage.removeItem('player');
    }
  }, [players]);

  useEffect(() => {
    if (socket) {
      socket.on('players', (data) => {
        setPlayers(data);
      });
    }
  }, [socket]);

  const addPlayer = useCallback(
    (name) => {
      socket.emit('addPlayer', name);
      setCurrentPlayer(name);
      localStorage.setItem('player', name);
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
