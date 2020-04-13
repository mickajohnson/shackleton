import React from 'react';
import Card from '../Card';
import classNames from 'classnames';
import './HandCard.css';

const HandCard = ({ onCardDoubleClick, card, personAlreadyPlayed }) => {
  const playable = !personAlreadyPlayed;

  const handleCardDoubleClick = () => {
    if (playable) {
      onCardDoubleClick(card);
    }
  };
  return (
    <div
      className={classNames('card', { playable })}
      onDoubleClick={() => handleCardDoubleClick(card)}
    >
      <Card card={card} />
    </div>
  );
};

export default HandCard;
