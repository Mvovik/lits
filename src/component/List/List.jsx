import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

class List extends Component {
  todoListItem = (key, item) => {
    return (
    <div className="view">
      <Checkbox />
      <li key={key}>
        {item} 
        {/* <button onClick={ this.props.onDelete.bind(key, item) } className="closeButton close" >×</button> */}
        <label>{item}</label>
        <Button />
      </li>
    </div>
    );
  };
  render() {
      const {todoList} = this.props;
      return (<ul>
                  {todoList && todoList.map((item, key) => this.todoListItem(key, item)) }
                  
              </ul>
      );
  }
}
List.PropTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

List.defaultProps = {
  onClick: () => ({})
};

export default List;

// for(let i=0; i < 3; ++i){ //var
//   setTimeout(function(){
//     console.log(i);
//   }, 0);
// }