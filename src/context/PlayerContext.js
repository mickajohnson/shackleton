import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import SocketContext from './SocketContext';

const PlayerContext = createContext();

const reorderPlayers = (players, startingPlayer) => {
  const currPlayerIndex = players.findIndex((player) => player === startingPlayer);
  const splicedPlayers = players.splice(currPlayerIndex);
  const reorderedPlayers = splicedPlayers.concat(players);
  return reorderedPlayers;
};

export const PlayerContextProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [players, setPlayers] = useState([]);
  const [captain, setCaptain] = useState();
  const [whoseTurn, setWhoseTurn] = useState();
  const [playerNumbers, setPlayerNumbers] = useState({});
  const [trickZIndices, setTrickZIndices] = useState({});

  const socket = useContext(SocketContext);

  useEffect(() => {
    const player = null;
    if (players.length > 0 && player && !currentPlayer) {
      setCurrentPlayer(player);
    }
  }, [players, currentPlayer]);

  useEffect(() => {
    if (socket) {
      socket.on('reset', () => {
        localStorage.removeItem('player');

        setPlayers([]);
        setCurrentPlayer(null);
        setPlayerNumbers({});
        setCaptain(null);
        setWhoseTurn(null);
        setTrickZIndices({});
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('players', (data) => {
        setPlayers(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('trickLeader', (trickLeader) => {
        const reorderedPlayers = reorderPlayers([...players], trickLeader);

        const zIndexObject = {};
        reorderedPlayers.forEach((player, idx) => {
          zIndexObject[player] = idx + 1;
        });

        setTrickZIndices(zIndexObject);
      });
    }
  }, [socket, players]);

  useEffect(() => {
    if (socket) {
      socket.on('gameStarted', () => {
        const reorderedPlayers = reorderPlayers([...players], currentPlayer);

        reorderedPlayers.forEach((player, index) => {
          setPlayerNumbers((current) => ({ ...current, [index]: player }));
        });
      });
    }
  }, [socket, players, currentPlayer]);

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
      localStorage.setItem('player', name);
    },
    [socket]
  );

  useEffect(() => {
    if (socket) {
      socket.on('successfulReeconnect', () => {
        const existingPlayer = localStorage.getItem('player');
        setCurrentPlayer(existingPlayer);
      });
    }
  }, [socket]);

  const state = {
    currentPlayer,
    players,
    addPlayer,
    captain,
    whoseTurn,
    playerNumbers,
    trickZIndices,
  };

  return <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>;
};

export default PlayerContext;
