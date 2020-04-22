import React, { useContext, useMemo } from 'react';
import { map } from 'lodash';
import './Tasks.css';

import GameContext from '../../context/GameContext';
import communicationToken from '../../assets/helper_token.png';
import TaskCard from '../TaskCard';

const Tasks = ({ player }) => {
  const { tasks } = useContext(GameContext);
  const playerTasks = useMemo(() => tasks.filter((task) => task.asignee === player), [
    tasks,
    player,
  ]);
  const handleCommunicationClick = () => {
    console.log('f');
  };

  return (
    <div className="tasksAndCommunicatorArea">
      <div className="tasksArea">
        {map(playerTasks, (taskCard) => (
          <React.Fragment key={taskCard.id}>
            <TaskCard card={taskCard} canSelect={false} onCardDoubleClick={() => {}} />
          </React.Fragment>
        ))}
      </div>
      <div className="communicatorContainer" onClick={handleCommunicationClick}>
        <img className="communicatorImage" src={communicationToken} alt="Communication Token" />
      </div>
    </div>
  );
};

export default Tasks;
