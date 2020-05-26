import React from 'react';
import PropTypes from 'prop-types';

import useNoClickOutline from '../../hooks/useNoClickOutline';

const NoClickOutlineDiv = (props) => {
  const [handleMouseDown, handleBlur, style] = useNoClickOutline(props);
  return (
    <div
      {...props}
      role="button"
      tabIndex={props.tabIndex}
      style={style}
      onMouseDown={handleMouseDown}
      onBlur={handleBlur}
    >
      {props.children}
    </div>
  );
};

NoClickOutlineDiv.propTypes = {
  children: PropTypes.node,
  tabIndex: PropTypes.number,
  style: PropTypes.object,
  onBlur: PropTypes.func,
  onMouseDown: PropTypes.func,
};

NoClickOutlineDiv.defaultProps = {
  style: {},
  children: null,
  onMouseDown: () => {},
  onBlur: () => {},
  tabIndex: 0,
};

export default NoClickOutlineDiv;
