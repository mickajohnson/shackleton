import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import './YourHand.css';
import PlayerContext from '../../context/PlayerContext';
import floe from '../../assets/floe.png';
import captainImg from '../../assets/captain.png';
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
  const { hand } = useContext(GameContext);
  const { currentPlayer, captain } = useContext(PlayerContext);

  if (!hand) {
    return null;
  }
  return (
    <div className="yourArea">
      <img className="mainPlayerFloe" src={floe} alt="Communication Token" />
      <div className="yourHand">
        {hand.map((card, idx) => (
          <HandCard
            key={card.id}
            card={card}
            player={currentPlayer}
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

      <div className="currentPlayerName">
        {currentPlayer}
        {captain === currentPlayer && <img src={captainImg} alt="C" className="captainWheel" />}
      </div>
    </div>
  );
};

export default GameScreen;
