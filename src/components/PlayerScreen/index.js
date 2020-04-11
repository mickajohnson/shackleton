import React, { useContext } from 'react';
import AddPlayer from '../AddPlayer';
import PlayerContext from '../../context/PlayerContext';
import GameContext from '../../context/GameContext';
import styled from 'styled-components';

const MatchingPlayer = styled.p`
  color: #3b3f65;
  font-family: 'courier';
`;

const PlayerScreen = () => {
  const { players, currentPlayer } = useContext(PlayerContext);
  const { startGame } = useContext(GameContext);

  console.log(players);
  return (
    <div>
      <h1>Players</h1>

      <ul>
        {players.map((player) =>
          player === currentPlayer ? (
            <MatchingPlayer key={player}>{player}</MatchingPlayer>
          ) : (
            <p key={player}>{player}</p>
          )
        )}
      </ul>
      {currentPlayer ? <button onClick={startGame}>Start Game</button> : <AddPlayer />}
    </div>
  );
};

export default PlayerScreen;
