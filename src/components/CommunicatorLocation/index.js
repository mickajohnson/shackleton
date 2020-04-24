import React, { useContext } from 'react';
import './CommunicatorLocation.css';
import GameContext from '../../context/GameContext';

const CommunicatorLocation = () => {
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
