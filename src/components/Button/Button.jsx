import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
    render(){
        const { value, onSubmit } = this.props;
        return <input type='submit' value={value} onSubmit={onSubmit} className='btn'/>
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
};

Button.defaultProps = {
    onClick: () => ({})
};

export default Button;