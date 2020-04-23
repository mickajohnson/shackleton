import React, { useContext } from 'react';
import PlayerContext from '../../context/PlayerContext';
import './Announcement.css';
import GameContext from '../../context/GameContext';

const Announcement = () => {
  const { whoseTurn } = useContext(PlayerContext);
  const { trickWinner, personCommunicating, pickCommLocation } = useContext(GameContext);

  const determineMessage = () => {
    if (pickCommLocation) return 'Choose Spotlight Location';
    if (personCommunicating) return `${personCommunicating} is communicating...`;
    if (trickWinner) return `${trickWinner} wins trick`;
    if (whoseTurn) return `${whoseTurn}'s Turn`;
    return '';
  };
  return <p className="announcement">{determineMessage()}</p>;
};

export default Announcement;
