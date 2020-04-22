import React, { useContext } from 'react';
import PlayerContext from '../../context/PlayerContext';
import './Announcement.css';
import GameContext from '../../context/GameContext';

const Announcement = () => {
  const { whoseTurn } = useContext(PlayerContext);
  const { trickWinner } = useContext(GameContext);

  return (
    <p className="announcement">
      {trickWinner ? `${trickWinner} wins trick` : `${whoseTurn}'s Turn`}
    </p>
  );
};

export default Announcement;
