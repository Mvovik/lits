import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import DeleteButton from '../DeleteButton';

class List extends Component {
  todoListItem = (key, item) => {
    return (
      <li className="App-todo-element" key={key} onClick={this.props.onDelete.bind(this, key, item)}>
        <div className="App-checkbox-wrapper">
          <label className="App-todo-label">
            <Checkbox />
            <span className="App-todo-box" />
          </label>
        </div>
        <p className="App-todo-text">{item}</p>
        {/* <DeleteButton/> */}
        <button type="button" className="App-delete-btn" />
      </li>
    );
  };
  render() {
    const { todoList } = this.props;

    return (
      <ul className="App-todo-list">
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
