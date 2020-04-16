import React from 'react';
import Card from '../Card';
import classNames from 'classnames';
import './TaskCard.css';

const TaskCard = ({ onCardDoubleClick, card, canSelect }) => {
  const selectable = canSelect;

  const handleCardDoubleClick = () => {
    if (selectable) {
      onCardDoubleClick(card);
    }
  };
  return (
    <div className={classNames({ selectable })} onDoubleClick={() => handleCardDoubleClick(card)}>
      <Card card={card} taskCard />
    </div>
  );
};

export default TaskCard;
