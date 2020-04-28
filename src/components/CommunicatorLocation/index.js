import React, { useContext } from 'react';
import './CommunicatorLocation.css';
import GameContext from '../../context/GameContext';

const CommunicatorLocation = () => {
  // TODO: check that card is either lowest, highest or only of suit and only allow those options

  const { chooseCommunicatorLocation } = useContext(GameContext);
  return (
    <div className="communicatorLocationContainer">
      <button onClick={() => chooseCommunicatorLocation('top')} className="startButton">
        Top (Highest of Suit)
      </button>
      <button onClick={() => chooseCommunicatorLocation('middle')} className="startButton">
        Middle (Only of Suit)
      </button>
      <button onClick={() => chooseCommunicatorLocation('bottom')} className="startButton">
        Bottom (Lowest of Suit)
      </button>
    </div>
  );
};

export default CommunicatorLocation;
