import React from 'react';
import Card from '../Card';
import classNames from 'classnames';
import './TaskCard.css';

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
  </svg>
);

const TaskCard = ({ onCardDoubleClick, card, canSelect }) => {
  const selectable = canSelect;

  const handleCardDoubleClick = () => {
    if (selectable) {
      onCardDoubleClick(card);
    }
  };
  return (
    <div className="taskCardComponent">
      <div
        className={classNames('taskCardContainer', { selectable })}
        onDoubleClick={() => handleCardDoubleClick(card)}
      >
        <Card card={card} taskCard />
      </div>
      {card.success ? (
        <div className="completedOverlay">
          <Check />
        </div>
      ) : null}
    </div>
  );
};

export default TaskCard;
