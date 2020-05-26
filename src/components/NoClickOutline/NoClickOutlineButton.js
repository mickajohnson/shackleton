import React from 'react';
import PropTypes from 'prop-types';

import useNoClickOutline from '../../hooks/useNoClickOutline';

const NoClickOutlineButton = (props) => {
  const [handleMouseDown, handleBlur, style] = useNoClickOutline(props);
  return (
    <button // eslint-disable-line react/button-has-type
      {...props}
      style={style}
      onMouseDown={handleMouseDown}
      onBlur={handleBlur}
    >
      {props.children}
    </button>
  );
};

NoClickOutlineButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.object,
  onBlur: PropTypes.func,
  onMouseDown: PropTypes.func,
};

NoClickOutlineButton.defaultProps = {
  style: {},
  children: null,
  onMouseDown: () => {},
  onBlur: () => {},
};

export default NoClickOutlineButton;
