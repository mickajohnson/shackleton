import React, { useContext, useMemo } from 'react';
import { map } from 'lodash';
import './Tasks.css';

import GameContext from '../../context/GameContext';
import TaskCard from '../TaskCard';

const Tasks = ({ player }) => {
  const { tasks } = useContext(GameContext);
  const playerTasks = useMemo(() => tasks.filter((task) => task.asignee === player), [
    tasks,
    player,
  ]);

  return (
    <div className="tasksArea">
      {map(playerTasks, (taskCard) => (
        <React.Fragment key={taskCard.id}>
          <TaskCard card={taskCard} canSelect={false} onCardDoubleClick={() => {}} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Tasks;
