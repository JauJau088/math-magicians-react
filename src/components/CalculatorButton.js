import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.text = props.text;
    this.bgColor = props.bgColor;
    this.col = props.col;
  }

  render() {
    return (
      <button className={`Button ${this.bgColor}`} type="button">
        { this.text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  col: PropTypes.number,
};

Button.defaultProps = {
  col: 1,
  bgColor: 'Grey',
};

export default Button;
