import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import cardback from '../../assets/Card.svg';
import './YourHand.css';
import PlayerContext from '../../context/PlayerContext';

const GameScreen = () => {
  const { hand, playCard, turnState } = useContext(GameContext);
  const { currentPlayer, captain } = useContext(PlayerContext);
  const handleCardClick = (card) => {
    if (!turnState[currentPlayer]) {
      playCard(currentPlayer, card.id);
    }
  };
  return (
    <div>
      {captain === currentPlayer && <div>You are captain</div>}
      <h2>Your Hand</h2>
      {hand.map((card) => (
        <div
          onDoubleClick={() => handleCardClick(card)}
          className="card"
          bg={cardback}
          key={card.id}
        >
          <img src={cardback} alt="card" className="cardImage" />
          <p className="cardContent">{`${card.number} ${card.color}`}</p>
        </div>
      ))}
    </div>
  );
};

export default GameScreen;
