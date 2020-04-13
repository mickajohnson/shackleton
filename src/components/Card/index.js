import React from 'react';
import trump from '../../assets/trump.png';
import yellow from '../../assets/yellow.png';
import red from '../../assets/red.png';
import blue from '../../assets/blue.png';
import green from '../../assets/green.png';
import './Card.css';

const sources = {
  green,
  blue,
  red,
  yellow,
  trump,
};

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={sources[card.color]} alt="card" className="cardImage" />
      <p className="cardContent">{card.number}</p>
    </div>
  );
};

export default Card;
