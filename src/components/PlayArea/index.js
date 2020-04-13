import React, { useContext } from 'react';
import { map } from 'lodash';
import './PlayArea.css';

import GameContext from '../../context/GameContext';
import Card from '../Card';

const PlayArea = () => {
  const { trick, trickWinner } = useContext(GameContext);

  return (
    <div className="playArea">
      <h4>{trickWinner ? `${trickWinner} wins trick` : null}</h4>
      {map(trick, (card, player) => (
        <div key={player}>
          <p>{player}</p>
          {card ? <Card card={card} /> : null}
        </div>
      ))}
    </div>
  );
};

export default PlayArea;
