import React, { useContext, useMemo } from 'react';
import { map } from 'lodash';
import './TaskSelectionArea.css';

import GameContext from '../../context/GameContext';
import TaskCard from '../TaskCard';
import PlayerContext from '../../context/PlayerContext';

const TaskSelectionArea = () => {
  const { tasks, selectTask } = useContext(GameContext);
  const { currentPlayer, whoseTurn } = useContext(PlayerContext);

  const selectableTasks = useMemo(() => tasks.filter((task) => !task.asignee), [tasks]);

  const handleCardDoubleClick = (card) => {
    selectTask(currentPlayer, card.id);
  };

  return (
    <div className="taskSelectionArea">
      {map(selectableTasks, (taskCard) => (
        <React.Fragment key={taskCard.id}>
          <p>Asignee: {taskCard.asignee}</p>
          <TaskCard
            card={taskCard}
            canSelect={currentPlayer === whoseTurn && !taskCard.asignee}
            onCardDoubleClick={handleCardDoubleClick}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskSelectionArea;
