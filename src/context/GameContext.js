import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import SocketContext from './SocketContext';

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);

  const socket = useContext(SocketContext);

  useEffect(() => {
    if (socket) {
      socket.on('gameStarted', () => {
        console.log('here');

        setGameStarted(true);
      });
    }
  }, [socket]);

  const startGame = useCallback(
    (name) => {
      socket.emit('startGame');
      setGameStarted(true);
    },
    [socket]
  );

  const state = {
    gameStarted,
    startGame,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export default GameContext;
