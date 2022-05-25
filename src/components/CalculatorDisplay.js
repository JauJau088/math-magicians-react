import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.value = props.value;
  }

  render() {
    return (
      <div className="Display">
        <div className="Display-Text">{this.value}</div>
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.number,
};

Display.defaultProps = {
  value: 0,
};

export default Display;
