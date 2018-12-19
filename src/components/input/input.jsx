import React, {Component} from 'react';

import PropTypes from 'prop-types';
class Input extends Component {
    render () {
        const {onClick} = this.props;
        return <input type='text' onClick={onClick}/>;
    }
}
Input.propTypes = {
    onClick: PropTypes.func.isRequired
};

Input.defaultProps = {
    onClick: () => ({})
};

export default Input;