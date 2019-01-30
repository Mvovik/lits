import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List(props) {
  const { todoList } = props;
  return (
    <ul>
      {todoList &&
        todoList.map((item, key) => <ListItem onSave={props.onSave}  item={{ item, key }} />)}
    </ul>
  );
}

List.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

List.defaultProps = {
  onClick: () => ({})
};

export default List;
