import React, { createContext, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    setSocket(socketIOClient('http://192.168.0.22:4001'));
  }, []);
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketContext;
