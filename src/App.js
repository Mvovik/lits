import React, { Component } from 'react';
import './App.css';
import Button from './component/Button';
// import Input from './component/Input';
//import Checkbox from './component/Checkbox';
import List from './component/List';
// import Icon from './List/icons8-ok.svg'

class App extends Component {

  input = React.createRef();
  state = { 
    value: '',
    todoList: [] 
  };

  onClick = event => {
      event.preventDefault();
      if(this.state.value){
      this.setState(({todoList, value}) => ({
          todoList: [...todoList, value],
          value: ''
        }));
      }
    }

  onChange = event => {
    this.setState({value: event.target.value})
  }

  onDelete = (itemToBeDeleted) => {
    //console.log(itemToBeDeleted)
    var newItems = this.state.todoList.filter( (item) => {
      return item !== itemToBeDeleted
    });

    this.setState({ todoList: newItems});
  }

  render() {
    const {todoList, value} = this.state;
    return (
      <div>
        <div className="todo-container">todos</div>
          <div className="App form">
          <form onSubmit={this.onClick}>
            <label>
              <input type="text" value={value} onChange={this.onChange} className="mainInput" placeholder={"What needs to be done?"} autoFocus />
            </label>
            <Button />
            <List todoList={todoList} onDelete={this.onDelete.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
