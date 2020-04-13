import React, { useContext } from 'react';
import { map } from 'lodash';
import cardback from '../../assets/Card.svg';
import './PlayArea.css';

import GameContext from '../../context/GameContext';
import Card from '../Card';

const PlayArea = () => {
  const { turnState } = useContext(GameContext);
  console.log('turn', turnState);

  return (
    <div className="playArea">
      {map(turnState, (card, player) => (
        <div key={player}>
          <p>{player}</p>
          {card ? <Card card={card} /> : null}
        </div>
      ))}
    </div>
  );
};

export default PlayArea;
