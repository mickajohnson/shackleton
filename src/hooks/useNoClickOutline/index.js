import { useState } from 'react';

const useNoClickOutline = ({ onMouseDown = () => {}, onBlur = () => {}, style = {} }) => {
  const [clicked, setClicked] = useState(false);

  const handleMouseDown = (e) => {
    onMouseDown(e);

    setClicked(true);
  };

  const handleBlur = (e) => {
    onBlur(e);
    if (clicked) {
      setClicked(false);
    }
  };

  let newStyle = { ...style };
  if (clicked) {
    newStyle = { ...newStyle, outline: 'none' };
  }

  return [handleMouseDown, handleBlur, newStyle];
};

export default useNoClickOutline;
