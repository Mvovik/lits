import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
  }

  input = React.createRef();

  state = {
    value: '',
    completed: false,
    todoList: []
  };
  componentDidMount() {}
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
  onChange = event => {
    this.setState({ value: event.target.value });
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };
  onCheckProperty = () => {
    console.log(this.state.todoList[0][1]);
  };

  render() {
    const { todoList, value } = this.state;
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
          <header className="App-input-header">
            <h1 className="App-todo-header">todos</h1>
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
          <List todoList={todoList} onDelete={this.onDelete} />
          {/* <Checkbox onClick = {this.onChecked} /> */}
        </form>
        <input type="button" value={'check'} onClick={this.onCheckProperty} />
      </div>
    );
  }
}

export default App;
