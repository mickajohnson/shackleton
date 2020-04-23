import React, { useContext } from 'react';
import Card from '../Card';
import classNames from 'classnames';
import './HandCard.css';
import GameContext from '../../context/GameContext';
import { every } from 'lodash';

const HandCard = ({ onCardDoubleClick, card, canPlay, style }) => {
  const { trickSuit, hand, youAreCommunicating, playCommunicatorCard } = useContext(GameContext);

  const legalCard =
    (!trickSuit ||
      card.color === trickSuit ||
      every(hand, (cardInHand) => cardInHand.color !== trickSuit)) &&
    (youAreCommunicating !== true || card.color !== 'trump');

  const playable = canPlay && legalCard;

  const handleCardDoubleClick = () => {
    if (youAreCommunicating && playable) {
      playCommunicatorCard(card.id);
    } else if (playable) {
      onCardDoubleClick(card);
    }
  };
  return (
    <div
      className={classNames('card', { playable })}
      onDoubleClick={() => handleCardDoubleClick(card)}
      style={style}
    >
      <Card card={card} />
    </div>
  );
};

export default HandCard;
