import React, { useContext } from 'react';
import GameContext, { CARD_PLAYING } from '../../context/GameContext';
import './YourHand.css';
import PlayerContext from '../../context/PlayerContext';
import HandCard from '../HandCard';

const getDiffFromMiddle = (cards, cardIndex) => {
  const middle = cards.length / 2;
  return cardIndex - middle;
};

const getRotation = (cards, cardIndex) => {
  return getDiffFromMiddle(cards, cardIndex) * 4;
};

const getTranslation = (cards, cardIndex) =>
  Math.pow(Math.abs(getDiffFromMiddle(cards, cardIndex)), 2);

const getSeparation = (cards) => (cards.length > 15 ? 15 : cards.length);

const GameScreen = () => {
  const { hand, playCard, trick, gamePhase } = useContext(GameContext);
  const { currentPlayer, captain, whoseTurn } = useContext(PlayerContext);
  const handleCardClick = (card) => {
    playCard(currentPlayer, card.id);
  };
  const canPlay =
    !trick[currentPlayer] && whoseTurn === currentPlayer && gamePhase === CARD_PLAYING;
  return (
    <div>
      {captain === currentPlayer && <div>You are captain</div>}
      <h2>Your Hand</h2>
      <div className="yourHand">
        {hand.map((card, idx) => (
          <HandCard
            canPlay={canPlay}
            onCardDoubleClick={handleCardClick}
            key={card.id}
            card={card}
            style={{
              transform: `rotateZ(${getRotation(hand, idx)}deg) translate(0px,${getTranslation(
                hand,
                idx
              )}%)`,
              margin: `0 -${getSeparation(hand)}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GameScreen;
