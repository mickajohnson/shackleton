import React, { useState, useContext } from 'react';
import SocketContext from '../../context/SocketContext';

const AddPlayer = () => {
  const [name, setName] = useState('');

  const socket = useContext(SocketContext);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    socket.emit('addPlayer', name);
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
