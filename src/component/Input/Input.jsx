import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
        <label>
            <input type="text" value={value} onChange={this.onChange} className="mainInput" {...this.props} autoFocus />
        </label>
        );
    }
}

Input.propTypes = {
  onClick: PropTypes.func.isRequired
};

Input.defaultProps = {
  onClick: () => ({})
};

export default Input;