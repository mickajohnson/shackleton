import React, { useContext, useMemo } from 'react';
import { map } from 'lodash';
import './Tasks.css';

import GameContext from '../../context/GameContext';
import TaskCard from '../TaskCard';

import Communicator from '../Communicator';

const Tasks = ({ player, orientation }) => {
  const { tasks } = useContext(GameContext);
  const playerTasks = useMemo(() => tasks.filter((task) => task.asignee === player), [
    tasks,
    player,
  ]);

  return (
    <div className="tasksAndCommunicatorArea">
      <div className="tasksArea">
        {map(playerTasks, (taskCard) => (
          <React.Fragment key={taskCard.id}>
            <TaskCard
              orientation={orientation}
              card={taskCard}
              canSelect={false}
              onCardDoubleClick={() => {}}
            />
          </React.Fragment>
        ))}
      </div>
      <Communicator player={player} orientation={orientation} />
    </div>
  );
};

export default Tasks;
