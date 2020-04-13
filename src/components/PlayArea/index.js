import React, { useContext } from 'react';
import { map } from 'lodash';
import cardback from '../../assets/Card.svg';

import GameContext from '../../context/GameContext';

const PlayArea = () => {
  const { turnState } = useContext(GameContext);
  console.log('turn', turnState);

  return (
    <div>
      {map(turnState, (card, player) => (
        <div key={player}>
          <p>{player}</p>
          {card ? (
            <div className="card" key={card.id}>
              <img src={cardback} alt="card" className="cardImage" />
              <p className="cardContent">{`${card.number} ${card.color}`}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default PlayArea;
