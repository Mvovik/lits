import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrossIcon from '../Icons/CrossIcon';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button';
import Input from '../Input';

class List extends Component {
state={
  showMe: false
}
  todoListItem = (key, item) => {
    return (
      <li key={key}>
        <Checkbox />
        {this.onDoubleClick(item)}
        <Button />
      </li>
    );
  };

onClick = event => {
this.setState({showMe: true})
}

  onDoubleClick = (item) => {
    if(this.state.showMe) { 
       return (<Input value={item}/>);
    } else { 
        return (<label onClick={this.onClick}>{item}</label>);
      } 
  }

  render() {
    const { todoList } = this.props;
    console.log('todoList :', todoList);
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
