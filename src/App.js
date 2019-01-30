import React, { Component } from 'react';
import './App.css';
import Button from './component/Button';
import List from './component/List';

class App extends Component {
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

  onSave = (key = 0, value) => {
    const { todoList } = this.state;
    todoList[key] = value;
    this.setState({ todoList });
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
            <List onSave={this.onSave} todoList={todoList} />
          </section>
        </form>
      </section>
    );
  }
}

export default App;
