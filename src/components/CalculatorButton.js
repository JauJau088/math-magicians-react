import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    text, bgColor, col, callback,
  } = props;

  return (
    <button
      className={`Button ${bgColor} ${col}`}
      type="button"
      onClick={() => callback(text)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  col: PropTypes.string,
  callback: PropTypes.func.isRequired,
};

Button.defaultProps = {
  col: '',
  bgColor: 'Grey',
};

export default Button;
