import React, { useContext } from 'react';
import LoginScreen from './components/LoginScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import MissionSelect from './components/MissionSelect';
import GameContext, {
  SIGN_IN,
  CARD_PLAYING,
  TASK_SELECTION,
  WON,
  LOST,
  MISSION_SELECT,
} from './context/GameContext';
import './App.css';

const Router = ({ gamePhase }) => {
  switch (gamePhase) {
    case SIGN_IN:
      return <LoginScreen />;
    case MISSION_SELECT:
      return <MissionSelect />;
    case CARD_PLAYING:
    case TASK_SELECTION:
      return <GameScreen />;
    case LOST:
    case WON:
      return <EndScreen />;
    default:
      return null;
  }
};

const App = () => {
  const { gamePhase } = useContext(GameContext);

  return (
    <div className="mainContainer">
      <Router gamePhase={gamePhase} />
    </div>
  );
};

export default App;
