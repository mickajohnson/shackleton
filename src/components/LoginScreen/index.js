import React, { useContext } from 'react';
import AddPlayer from '../AddPlayer';
import PlayerContext from '../../context/PlayerContext';
import GameContext from '../../context/GameContext';
import './LoginScreen.css';

const LoginScreen = () => {
  const { players, currentPlayer } = useContext(PlayerContext);
  const { startGame } = useContext(GameContext);

  return (
    <div>
      <div className="scrapbook" />
      <div className="book">
        <div className="bookContent">
          <div />
          <div className="bookPageTwo">
            <div className="logTitle">
              <p>Ernest</p>
              <p>22.09.1913</p>
            </div>
            <div className="playersContainer">
              {players.map((player) =>
                player === currentPlayer ? (
                  <p className="player matchingPlayer" key={player}>
                    {player}
                  </p>
                ) : (
                  <p className="player" key={player}>
                    {player}
                  </p>
                )
              )}

              {currentPlayer ? (
                <button className="startButton" disabled={players.length < 3} onClick={startGame}>
                  Start Game
                </button>
              ) : (
                <AddPlayer />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
