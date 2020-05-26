import React, { useState, useContext } from 'react';
import PlayerContext from '../../context/PlayerContext';
import './AddPlayer.css';

const AddPlayer = () => {
  const [name, setName] = useState('');

  const { addPlayer, players } = useContext(PlayerContext);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    addPlayer(name);
    setName('');
  };

  const buttonDisabled = name.length < 1 || players.includes(name);

  return (
    <React.Fragment>
      <div className="form__group field">
        <input
          value={name}
          onChange={handleInputChange}
          type="input"
          className="form__field"
          placeholder="Your Name"
          name="name"
          id="name"
          required
        />
        <label htmlFor="name" className="form__label">
          Name
        </label>
      </div>
      <button disabled={buttonDisabled} className="startButton" onClick={handleSubmit}>
        Join our Voyage
      </button>
    </React.Fragment>
  );
};

export default AddPlayer;
