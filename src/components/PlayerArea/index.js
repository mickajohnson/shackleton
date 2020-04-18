import React from 'react';
import classNames from 'classnames';

import Tasks from '../Tasks';

import './PlayerArea.css';

const PlayerArea = ({ orientation, player }) => {
  return (
    <div
      className={classNames('playerArea', {
        playerAreaLeft: orientation === 'left',
        playerAreaTop: orientation === 'top',
        playerAreaRight: orientation === 'right',
      })}
    >
      <div
        className={classNames({
          playerNameLeft: orientation === 'left',
          playerNameTop: orientation === 'top',
          playerNameRight: orientation === 'right',
        })}
      >
        {player}
      </div>
      <div
        className={classNames('playerTasks', {
          playerTasksLeft: orientation === 'left',
          playerTasksTop: orientation === 'top',
          playerTasksRight: orientation === 'right',
        })}
      >
        <Tasks player={player} orientation={orientation} />
      </div>
    </div>
  );
};

export default PlayerArea;
