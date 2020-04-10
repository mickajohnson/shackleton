import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SocketContextProvider } from './context/SocketContext';
import { PlayerContextProvider } from './context/PlayerContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <SocketContextProvider>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </SocketContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
