import React, { useContext, useMemo } from 'react';
import { map } from 'lodash';
import classNames from 'classnames';
import './Tasks.css';

import GameContext from '../../context/GameContext';
import communicationToken from '../../assets/helper_token.png';
import TaskCard from '../TaskCard';

const Tasks = ({ player, orientation }) => {
  const { tasks } = useContext(GameContext);
  const playerTasks = useMemo(() => tasks.filter((task) => task.asignee === player), [
    tasks,
    player,
  ]);
  const handleCommunicationClick = () => {
    console.log('f');
  };

  return (
    <div
      className={classNames('tasksAndCommunicatorArea', {
        tasksAndCommunicatorAreaBottom: orientation === 'bottom',
        tasksAndCommunicatorAreaTop: orientation === 'top',
        tasksAndCommunicatorAreaLeft: orientation === 'left',
        tasksAndCommunicatorAreaRight: orientation === 'right',
      })}
    >
      <div
        className={classNames('tasksArea', {
          tasksAreaBottom: orientation === 'bottom',
          tasksAreaTop: orientation === 'top',
          tasksAreaLeft: orientation === 'left',
          tasksAreaRight: orientation === 'right',
        })}
      >
        {map(playerTasks, (taskCard) => (
          <React.Fragment key={taskCard.id}>
            <TaskCard card={taskCard} canSelect={false} onCardDoubleClick={() => {}} />
          </React.Fragment>
        ))}
      </div>
      <div
        className={classNames('communicatorContainer', {
          communicatorContainerBottom: orientation === 'bottom',
          communicatorContainerTop: orientation === 'top',
          communicatorContainerLeft: orientation === 'left',
          communicatorContainerRight: orientation === 'right',
        })}
        onClick={handleCommunicationClick}
      >
        <img className="communicatorImage" src={communicationToken} alt="Communication Token" />
      </div>
    </div>
  );
};

export default Tasks;
