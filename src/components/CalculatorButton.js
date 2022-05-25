import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.bgColor = props.bgColor;
    this.col = props.col;
    this.callback = props.callback;
  }

  render() {
    return (
      <button
        className={`Button ${this.bgColor} ${this.col}`}
        type="button"
        onClick={() => this.callback(this.text)}
      >
        {this.text}
      </button>
    );
  }
}

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
