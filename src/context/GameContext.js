import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import SocketContext from './SocketContext';
import PlayerContext from './PlayerContext';
import usePrevious from '../hooks/usePrevious';

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [hand, setHand] = useState([]);
  const [turnState, setTurnState] = useState({});

  const socket = useContext(SocketContext);
  const { currentPlayer, players } = useContext(PlayerContext);

  const prevGameStarted = usePrevious(gameStarted);
  useEffect(() => {
    if (gameStarted && !prevGameStarted) {
      socket.emit('getCards', currentPlayer);
    }
  }, [gameStarted, currentPlayer, prevGameStarted, socket, players]);

  const playCard = (player, cardId) => {
    socket.emit('playCard', { player, cardId });
  };

  useEffect(() => {
    if (socket) {
      socket.on('gameStarted', () => {
        setGameStarted(true);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('turnState', (data) => {
        setTurnState(data);
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
    playCard,
    turnState,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export default GameContext;
