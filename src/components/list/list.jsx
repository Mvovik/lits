import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

class List extends Component {
todoListItem = (key, item) => {
 return <li key={key}>{item}</li>;
};

    render() {
        
        const { todoList } = this.props;
        console.log('todolist:', todoList);
        return (
            <ul>
            {todoList && todoList.map((item, key) => this.todoListItem(key, item))}
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