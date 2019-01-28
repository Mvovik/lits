import React, { Component } from 'react';
import './App.css';
import Button from './component/Button';
import List from './component/List';
//import CrossIcon from
//import FAIcon from './component/Icons/CrossIcon';
import './component/Icons/CrossIcon';
import CrossIcon from './component/Icons/CrossIcon';
import ArrowIcon from './component/Icons/Arrow';
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

  render() {
    const { todoList, value } = this.state;
    return (
      <section className="todo-container">
        <form onSubmit={this.handleSubmit}>
          <header>
            <h1>todos</h1>
            <div>
         <ArrowIcon /> </div>
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
