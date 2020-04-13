import React, { createContext, useState, useContext, useEffect } from 'react';
import SocketContext from './SocketContext';
import PlayerContext from './PlayerContext';
import usePrevious from '../hooks/usePrevious';

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [hand, setHand] = useState([]);
  const [trick, setTrick] = useState({});
  const [trickSuit, setTrickSuit] = useState();
  const [trickWinner, setTrickWinner] = useState();

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
      socket.on('trick', (data) => {
        setTrick(data);
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

  useEffect(() => {
    if (socket) {
      socket.on('trickWinner', (data) => {
        setTrickWinner(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('trickSuit', (data) => {
        setTrickSuit(data);
      });
    }
  }, [socket]);

  const startGame = () => socket.emit('startGame');

  const state = {
    gameStarted,
    startGame,
    hand,
    playCard,
    trick,
    trickSuit,
    trickWinner,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export default GameContext;
