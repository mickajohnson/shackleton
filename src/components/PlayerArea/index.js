import React, { useContext } from 'react';
import classNames from 'classnames';
import PlayerContext from '../../context/PlayerContext';
import captainImg from '../../assets/captain.png';

import Tasks from '../Tasks';

import './PlayerArea.css';

const PlayerArea = ({ orientation, player }) => {
  const { captain } = useContext(PlayerContext);

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
        {captain === player && <img src={captainImg} alt="C" className="captainWheel" />}
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
