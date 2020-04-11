import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import SocketContext from './SocketContext';
import PlayerContext from './PlayerContext';
import usePrevious from '../hooks/usePrevious';

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [hand, setHand] = useState([]);

  const socket = useContext(SocketContext);
  const { currentPlayer } = useContext(PlayerContext);

  const prevGameStarted = usePrevious(gameStarted);
  useEffect(() => {
    if (gameStarted && !prevGameStarted) {
      console.log('sent thing');

      socket.emit('getCards', currentPlayer);
    }
  }, [gameStarted, currentPlayer, prevGameStarted, socket]);

  useEffect(() => {
    if (socket) {
      socket.on('gameStarted', () => {
        setGameStarted(true);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('hand', (data) => {
        setHand(data);
      });
    }
  }, [socket]);

  const startGame = useCallback(
    (name) => socket.emit('startGame'),

    [socket]
  );

  const state = {
    gameStarted,
    startGame,
    hand,
  };

  console.log(hand);

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export default GameContext;
