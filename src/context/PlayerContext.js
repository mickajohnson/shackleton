import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import SocketContext from './SocketContext';

const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [players, setPlayers] = useState([]);
  const [captain, setCaptain] = useState();
  const [whoseTurn, setWhoseTurn] = useState();
  const [playerNumbers, setPlayerNumbers] = useState({});

  const socket = useContext(SocketContext);

  useEffect(() => {
    // const player = localStorage.getItem('player');
    const player = null;
    if (players.length > 0 && player && !currentPlayer) {
      setCurrentPlayer(player);
    }
  }, [players, currentPlayer]);

  // useEffect(() => {
  //   if (players.length === 0) {
  //     localStorage.removeItem('player');
  //   }
  // }, [players]);

  useEffect(() => {
    if (socket) {
      socket.on('players', (data) => {
        setPlayers(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('gameStarted', () => {
        const playerCopy = [...players];
        const currPlayerIndex = playerCopy.findIndex((player) => player === currentPlayer);
        const splicedPlayers = playerCopy.splice(currPlayerIndex);
        const reorderedPlayers = splicedPlayers.concat(playerCopy);
        console.log(reorderedPlayers);

        reorderedPlayers.forEach((player, index) => {
          setPlayerNumbers((current) => ({ ...current, [player]: index }));
        });
      });
    }
  }, [socket, players, currentPlayer]);

  console.log(playerNumbers);

  useEffect(() => {
    if (socket) {
      socket.on('captain', (data) => {
        setCaptain(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('whoseTurn', (data) => {
        setWhoseTurn(data);
      });
    }
  }, [socket]);

  const addPlayer = useCallback(
    (name) => {
      setPlayers((players) => [...players, name]);
      socket.emit('addPlayer', name);
      setCurrentPlayer(name);
      // localStorage.setItem('player', name);
    },
    [socket]
  );

  const state = {
    currentPlayer,
    players,
    addPlayer,
    captain,
    whoseTurn,
  };

  return <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>;
};

export default PlayerContext;
