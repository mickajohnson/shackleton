import React, { useState } from 'react';

const AddPlayer = ({ socket }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    socket.emit('addPlayer', name);
    setName('');
  };

  return (
    <div>
      <h1>Players</h1>
      <input value={name} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddPlayer;
