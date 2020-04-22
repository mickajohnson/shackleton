import React from 'react';
import classNames from 'classnames';
import trump from '../../assets/trump.png';
import yellow from '../../assets/yellow.png';
import red from '../../assets/red.png';
import blue from '../../assets/blue.png';
import green from '../../assets/green.png';
import trump_left from '../../assets/trump_left.png';
import yellow_left from '../../assets/yellow_left.png';
import red_left from '../../assets/red_left.png';
import blue_left from '../../assets/blue_left.png';
import green_left from '../../assets/green_left.png';
import trump_right from '../../assets/trump_right.png';
import yellow_right from '../../assets/yellow_right.png';
import red_right from '../../assets/red_right.png';
import blue_right from '../../assets/blue_right.png';
import green_right from '../../assets/green_right.png';
import './Card.css';

const sources = {
  green,
  blue,
  red,
  yellow,
  trump,
  green_top: green,
  blue_top: blue,
  red_top: red,
  yellow_top: yellow,
  trump_top: trump,
  green_left,
  blue_left,
  red_left,
  yellow_left,
  trump_left,
  green_right,
  blue_right,
  red_right,
  yellow_right,
  trump_right,
};

const Card = ({ card, taskCard, orientation }) => {
  const cardColor = orientation ? `${card.color}_${orientation}` : card.color;
  return (
    <div
      className={classNames({
        card: !taskCard,
        taskCard: taskCard,
      })}
    >
      <img
        src={sources[cardColor]}
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
  orientation: null,
};

export default Card;
