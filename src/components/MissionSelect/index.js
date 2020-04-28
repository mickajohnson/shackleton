import React, { useState, useContext } from 'react';
import missions from './missions';
import GameContext from '../../context/GameContext';
import './MissionSelect.css';

const MissionSelect = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const { selectMission } = useContext(GameContext);

  const handleSelectMission = (mission) => {
    setSelectedMission(mission);
  };
  const handleAcceptMission = () => {
    selectMission(selectedMission.number);
  };
  return (
    <div className="missionSelect">
      <div className="missionsUpperSection">
        <span className="missionsHeader">Missions</span>
        <div className="missionsContainer">
          {missions.map((mission) => (
            <button
              className="missionButton"
              disabled={!mission.playable}
              onClick={() => handleSelectMission(mission)}
              key={mission.number}
            >
              {mission.number}
            </button>
          ))}
        </div>
      </div>
      {selectedMission !== null && (
        <div className="missionInfo">
          <span className="missionInfoTitle">Mission #{selectedMission.number}</span>
          <span className="missionInfoDesc">{selectedMission.description}</span>
          <button className="startButton" onClick={handleAcceptMission}>
            Start Mission
          </button>
        </div>
      )}
    </div>
  );
};

export default MissionSelect;
