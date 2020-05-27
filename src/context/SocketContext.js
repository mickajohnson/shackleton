import React, { createContext, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const existingPlayer = localStorage.getItem('player');
    setSocket(socketIOClient(process.env.REACT_APP_BACKEND_URL, { query: { existingPlayer } }));
  }, []);
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketContext;
