import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import { map, every, values } from 'lodash';
import './Tasks.css';

import GameContext, { CARD_PLAYING } from '../../context/GameContext';
import communicationToken from '../../assets/helper_token.png';
import TaskCard from '../TaskCard';

const Tasks = ({ player, orientation }) => {
  const { tasks, initiateCommunication, trick, gamePhase } = useContext(GameContext);
  const playerTasks = useMemo(() => tasks.filter((task) => task.asignee === player), [
    tasks,
    player,
  ]);

  const canCommunicate = every(values(trick), (val) => val === null) && gamePhase === CARD_PLAYING;
  // Can only communicate before trick and not in task selection - show this
  const handleCommunicationClick = () => {
    if (canCommunicate) {
      initiateCommunication();
    }
  };

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
      <div className={'communicatorContainer'} onClick={handleCommunicationClick}>
        <img
          className={classNames('communicatorImage', { canCommunicate })}
          src={communicationToken}
          alt="Communication Token"
        />
      </div>
    </div>
  );
};

export default Tasks;
