import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import './YourHand.css';
import PlayerContext from '../../context/PlayerContext';
import HandCard from '../HandCard';

const GameScreen = () => {
  const { hand, playCard, turnState } = useContext(GameContext);
  const { currentPlayer, captain } = useContext(PlayerContext);
  const handleCardClick = (card) => {
    playCard(currentPlayer, card.id);
  };
  return (
    <div>
      {captain === currentPlayer && <div>You are captain</div>}
      <h2>Your Hand</h2>
      {hand.map((card) => (
        <HandCard
          personAlreadyPlayed={turnState[currentPlayer]}
          onCardDoubleClick={handleCardClick}
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
};

export default GameScreen;
