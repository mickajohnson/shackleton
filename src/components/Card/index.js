import React from 'react';
import classNames from 'classnames';
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

const Card = ({ card, taskCard }) => {
  return (
    <div
      className={classNames({
        card: !taskCard,
        taskCard: taskCard,
      })}
    >
      <img
        src={sources[card.color]}
        alt="card"
        className={classNames({
          cardImage: !taskCard,
          taskCardImage: taskCard,
        })}
      />
      <p
        className={classNames({
          cardContent: !taskCard,
          taskCardContent: taskCard,
        })}
      >
        {card.number}
      </p>
    </div>
  );
};

Card.defaultProps = {
  taskCard: false,
};

export default Card;
