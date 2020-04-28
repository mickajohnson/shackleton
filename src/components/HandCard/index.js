import React, { useContext } from 'react';
import Card from '../Card';
import classNames from 'classnames';
import './HandCard.css';
import GameContext, { CARD_PLAYING } from '../../context/GameContext';
import PlayerContext from '../../context/PlayerContext';
import { every } from 'lodash';

const HandCard = ({ card, style, player, orientation }) => {
  const {
    trickSuit,
    hand,
    youAreCommunicating,
    playCommunicatorCard,
    trick,
    gamePhase,
    personCommunicating,
    pickCommLocation,
    playCard,
  } = useContext(GameContext);
  const { currentPlayer, whoseTurn } = useContext(PlayerContext);

  const canPlay =
    player === currentPlayer &&
    !trick[player] &&
    (whoseTurn === player || youAreCommunicating) &&
    gamePhase === CARD_PLAYING &&
    (personCommunicating === null || youAreCommunicating) &&
    !pickCommLocation;

  const legalCard =
    !trickSuit ||
    card.color === trickSuit ||
    every(hand, (cardInHand) => cardInHand.color !== trickSuit);

  // TODO: check that card is either lowest, highest or only of suit
  const legalCommunication = card.color !== 'trump';

  const playable =
    canPlay &&
    ((youAreCommunicating !== true && legalCard) ||
      (youAreCommunicating === true && legalCommunication));

  const handleCardDoubleClick = () => {
    if (youAreCommunicating && playable) {
      playCommunicatorCard(card.id);
    } else if (playable) {
      playCard(player, card.id);
    }
  };
  return (
    <div
      className={classNames('card', { playable, notPlayable: !playable })}
      onDoubleClick={() => handleCardDoubleClick(card)}
      style={style}
    >
      <Card card={card} orientation={orientation} />
    </div>
  );
};

HandCard.defaultProps = {
  orientation: null,
};

export default HandCard;
