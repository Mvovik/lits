import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component{

    render(){
        const { todoList } = this.props;
        return(
            <ul>
                { 
                    todoList.map((item, key) => (
                        <li key={key}><input type='checkbox'/><span className='item'>{item}</span></li>
                    )) 
                }
            </ul>
        );
    }
}

List.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
};

List.defaultProps = {
    onClick: () => ({})
};

export default List;