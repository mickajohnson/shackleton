import React, { useState, useContext } from 'react';
import PlayerContext from '../../context/PlayerContext';

const AddPlayer = () => {
  const [name, setName] = useState('');

  const { addPlayer } = useContext(PlayerContext);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    addPlayer(name);
    setName('');
  };

  return (
    <div>
      <input value={name} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddPlayer;
