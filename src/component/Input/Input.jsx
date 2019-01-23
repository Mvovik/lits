import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type = 'text' } = this.props;
    return <input type={type} {...this.props} />;
  }
}

Input.propTypes = {
  onClick: PropTypes.func.isRequired
};

Input.defaultProps = {
  onClick: () => ({})
};

export default Input;
