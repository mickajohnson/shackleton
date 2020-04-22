import React, { useContext } from 'react';
import './PlayArea.css';

import GameContext from '../../context/GameContext';
import PlayerContext from '../../context/PlayerContext';
import Card from '../Card';

const PlayArea = () => {
  const { trick } = useContext(GameContext);
  const { playerNumbers, currentPlayer, trickZIndices } = useContext(PlayerContext);

  console.log(trickZIndices, { zIndex: trickZIndices[currentPlayer] });

  return (
    <div className="playArea">
      <div className="trickArea">
        <div style={{ zIndex: trickZIndices[currentPlayer] }} className="currentPlayerTrickCard">
          {trick[currentPlayer] ? <Card card={trick[currentPlayer]} /> : null}
        </div>
        <div style={{ zIndex: trickZIndices[playerNumbers[1]] }} className="playerOneTrickCard">
          {trick[playerNumbers[1]] ? <Card card={trick[playerNumbers[1]]} /> : null}
        </div>
        <div style={{ zIndex: trickZIndices[playerNumbers[2]] }} className="playerTwoTrickCard">
          {trick[playerNumbers[2]] ? <Card card={trick[playerNumbers[2]]} /> : null}
        </div>
        <div style={{ zIndex: trickZIndices[playerNumbers[3]] }} className="playerThreeTrickCard">
          {trick[playerNumbers[3]] ? <Card card={trick[playerNumbers[3]]} /> : null}
        </div>
      </div>
    </div>
  );
};

export default PlayArea;
