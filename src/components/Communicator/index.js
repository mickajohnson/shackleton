import React, { useContext } from 'react';
import classNames from 'classnames';
import { every, values, get } from 'lodash';
import './Communicator.css';

import GameContext, { CARD_PLAYING } from '../../context/GameContext';
import communicationToken from '../../assets/helper_token.png';
import flippedCommToken from '../../assets/helper_token_inactive.png';
import PlayerContext from '../../context/PlayerContext';

import HandCard from '../HandCard';

const positionMapping = {
  top: 'Highest',
  middle: 'Only',
  bottom: 'Lowest',
};

const Communicator = ({ player, orientation }) => {
  const {
    initiateCommunication,
    trick,
    gamePhase,
    personCommunicating,
    communicationInfo,
    extraRules,
  } = useContext(GameContext);
  const { currentPlayer } = useContext(PlayerContext);
  const playerCommInfo = get(communicationInfo, player, {});
  const haveAlreadyCommunicated = playerCommInfo.played;

  const canCommunicate =
    every(values(trick), (val) => val === null) &&
    gamePhase === CARD_PLAYING &&
    player === currentPlayer &&
    !personCommunicating &&
    !haveAlreadyCommunicated &&
    extraRules.canCommunicate;

  const handleCommunicationClick = () => {
    if (canCommunicate) {
      initiateCommunication();
    }
  };

  if (haveAlreadyCommunicated) {
    if (playerCommInfo.card) {
      return (
        <div className="playedCommArea">
          <HandCard player={player} card={playerCommInfo.card} orientation={orientation} />

          <div
            className={classNames('playedCommTokenContainer', {
              commDeadZone: extraRules.deadZone,
              commTop: playerCommInfo.position === 'top',
              commMiddle: playerCommInfo.position === 'middle',
              commBottom: playerCommInfo.position === 'bottom',
            })}
          >
            {extraRules.deadZone ? (
              <img
                className={classNames('communicatorImage')}
                src={flippedCommToken}
                alt="Flipped Communication Token"
              />
            ) : (
              <img
                className="communicatorImage"
                src={communicationToken}
                alt="Communication Token"
              />
            )}
          </div>
          <span className="commDescription">
            {extraRules.deadZone ? '???' : positionMapping[playerCommInfo.position]}
          </span>
        </div>
      );
    } else {
      return (
        <div className={'communicatorContainer'}>
          <img
            className={classNames('communicatorImage')}
            src={flippedCommToken}
            alt="Flipped Communication Token"
          />
        </div>
      );
    }
  }

  return (
    <div className={'communicatorContainer'} onDoubleClick={handleCommunicationClick}>
      <img
        className={classNames('communicatorImage', { canCommunicate })}
        src={communicationToken}
        alt="Communication Token"
      />
    </div>
  );
};

export default Communicator;
