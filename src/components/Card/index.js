import React from 'react';
import cardback from '../../assets/Card.svg';
import './Card.css';

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={cardback} alt="card" className="cardImage" />
      <p className="cardContent">{`${card.number} ${card.color}`}</p>
    </div>
  );
};

export default Card;
