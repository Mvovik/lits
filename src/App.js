import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Clear from './components/Clear';

class App extends Component {
  state = {
    value: '',
    completed: false,
    todoList: []
  };

  isToggleAll = false;

  handleSubmit = event => {
    event.stopPropagation();
    event.preventDefault();
    const { completed } = this.state;
    if (this.state.value) {
      this.setState(({ todoList, value }) => ({
        todoList: [...todoList, { value, completed }],
        value: ''
      }));
    }
  };
  onDelete = (key, item) => {
    let todoList = this.state.todoList.filter(todo => todo !== item);
    this.setState({ todoList });
  };

  onCompleted = (item, event) => {
    event.stopPropagation();
    event.preventDefault();
    let { todoList } = this.state;
    function isCompleted(element) {
      if (element === item) {
        if (element.completed == false) {
          element.completed = true;
        } else element.completed = false;
        return element;
      }
    }
    todoList.find(isCompleted);
    this.setState({ todoList });
  };

  onToggleAll = event => {
    event.preventDefault();
    event.stopPropagation();
    let todoList = this.state.todoList;
    console.log(todoList);
    if (this.isToggleAll == 0) {
      todoList.map(element => {
        if (element.completed == false) element.completed = true;
        console.log(element.completed);
      });
      this.isToggleAll = true;
    } else {
      todoList.map(element => {
        element.completed = false;
      });
      this.isToggleAll = false;
    }
    this.setState({ todoList });
  };
  onChange = event => {
    this.setState({ value: event.target.value });
  };

  onClick = e => {
    const { todoList } = this.props;
    todoList.forEach(function(item, i, arr) {
      if (item.completed === true) {
        arr.splise(i, 1);
      }
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    const { todoList } = this.state;
    const unCompleted = todoList.filter(item => item.completed !== true);
    this.setState({ todoList: unCompleted });
  };

  render() {
    const { todoList, value, completed } = this.state;
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
          <header className="App-input-header">
            <h1 className="App-todo-header">todos</h1>
            <label
              htmlFor=""
              className={`App-toggle-all ${
                this.isToggleAll ? ' Toggle-all-completed' : ''
              }`}
              onClick={this.onToggleAll}
            />
            <input
              placeholder="What needs to be done?"
              className="App-input-text"
              type="text"
              value={value}
              onChange={this.onChange}
            />
          </header>

          {/* <Input ref={this.input} className="App-input" ></Input> */}
          {/* <Button value={'Add new'}></Button> */}
          <List
            todoList={todoList}
            onDelete={this.onDelete}
            onCompleted={this.onCompleted}
          />
          {/* <Checkbox onClick = {this.onChecked} /> */}
        </form>
        <Clear todoList={todoList} onClear={this.clearCompleted} />
      </div>
    );
  }
}

export default App;

