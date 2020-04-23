import React, { createContext, useState, useContext, useEffect } from 'react';
import SocketContext from './SocketContext';
import PlayerContext from './PlayerContext';
import usePrevious from '../hooks/usePrevious';

const GameContext = createContext();

// game phases
export const SIGN_IN = 'SIGN_IN';
export const TASK_SELECTION = 'TASK_SELECTION';
export const CARD_PLAYING = 'CARD_PLAYING';
export const WON = 'WON';
export const LOST = 'LOST';

export const GameContextProvider = ({ children }) => {
  const [gamePhase, setGamePhase] = useState(SIGN_IN);
  const [hand, setHand] = useState([]);
  const [trick, setTrick] = useState({});
  const [trickSuit, setTrickSuit] = useState();
  const [trickWinner, setTrickWinner] = useState();
  const [tasks, setTasks] = useState([]);
  const [communicationInfo, setCommunicationInfo] = useState({});
  const [personCommunicating, setPersonCommunicating] = useState(null);
  const [pickCommLocation, setPickCommLocation] = useState(null);

  const socket = useContext(SocketContext);
  const { currentPlayer, players } = useContext(PlayerContext);

  const prevGamePhase = usePrevious(gamePhase);
  useEffect(() => {
    if (gamePhase === TASK_SELECTION && prevGamePhase === SIGN_IN) {
      socket.emit('getCards', currentPlayer);
    }
  }, [gamePhase, currentPlayer, prevGamePhase, socket, players]);

  const playCard = (player, cardId) => {
    socket.emit('playCard', { player, cardId });
  };

  const playCommunicatorCard = (cardId) => {
    socket.emit('playCommunicatorCard', { player: currentPlayer, cardId });
  };

  const selectTask = (player, cardId) => {
    socket.emit('selectTask', { player, cardId });
  };

  const initiateCommunication = () => {
    socket.emit('initiateCommunication', currentPlayer);
  };

  useEffect(() => {
    if (socket) {
      socket.on('gameStarted', () => {
        setGamePhase(TASK_SELECTION);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('communicating', (person) => {
        setPersonCommunicating(person);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('pickCommunicatorLocation"', () => {
        console.log('1212121');

        setPickCommLocation(true);
      });
    }
  }, [socket]);

  console.log(pickCommLocation);

  useEffect(() => {
    if (socket) {
      socket.on('won', () => {
        setGamePhase(WON);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('lost', () => {
        setGamePhase(LOST);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on('startPlay', () => {
        setGamePhase(CARD_PLAYING);
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
      socket.on('tasks', (data) => {
        setTasks(data);
      });
    }
  }, [socket]);
  useEffect(() => {
    if (socket) {
      socket.on('communicationInfo', (data) => {
        setCommunicationInfo(data);
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
    gamePhase,
    startGame,
    hand,
    playCard,
    trick,
    trickSuit,
    trickWinner,
    tasks,
    selectTask,
    initiateCommunication,
    personCommunicating,
    youAreCommunicating: currentPlayer === personCommunicating,
    playCommunicatorCard,
    communicationInfo,
    pickCommLocation,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export default GameContext;
