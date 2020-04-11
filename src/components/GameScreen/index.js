import React, { useContext } from 'react';
import GameContext from '../../context/GameContext';
import styled from 'styled-components';

const Card = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
`;

const GameScreen = () => {
  const { hand } = useContext(GameContext);
  return (
    <div>
      <h2>Play Area</h2>

      <h2>Your Hand</h2>
      {hand.map((card) => (
        <Card key={`${card.number}${card.color}`}>{`${card.number} ${card.color}`}</Card>
      ))}
    </div>
  );
};

export default GameScreen;
