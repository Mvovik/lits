import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        const {onClick} = this.props;
        return <button type='submit' onClick={onClick} className="mainButton">add</button>;
    }
}

Button.PropTypes = {
    onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    onClick: () => ({})
};

export default Button;