import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
    render () {
        const {onClick} = this.props;
        return <input type='Checkbox' onClick={onClick} value='Click'/>;
    }
}

Checkbox.propTypes = {
    onClick: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    onClick: () => ({})
};

export default Checkbox;