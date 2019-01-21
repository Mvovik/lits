import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Checkbox from './components/checkbox';
import List from './components/list';
// import Input from './components/input';


class App extends Component {
constructor(newProps) {
  super(newProps);
}

  state = {
    value: '',
    todoList: []
  };
  componentDidMount() {}

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value) {
      this.setState(({ todoList, value }) => ({
        todoList: [...todoList, value],
        value: ''
      }));
    }
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { todoList, value } = this.state;
    return (
      <section className="todo-container">
        <form onSubmit={this.handleSubmit}>
          <header>
            <h1>todos</h1>
            <input type="text" value={value} onChange={this.onChange} />
          </header>
          <section>
            <List todoList={todoList} />
          </section>
        </form>
      </section>
    );
  }
}

export default App;