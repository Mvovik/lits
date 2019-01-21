import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
// import Input from './components/Input';
// import Checkbox from './components/Checkbox';
import List from './components/List';

class App extends Component {

  constructor(newProps){
    super(newProps);
  }

  state = {
    value: '',
    todoList: []
  };
  componentDidMount(){}

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.value){
      this.setState(({ todoList, value }) => ({
        todoList: [...todoList, value],
        value: ''
      }));
    }
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { todoList, value } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <h1>todos</h1>
          <input type='text' value={value} onChange={this.onChange} className='input-todo' placeholder='What needs to be done?'/>
            <Button className='btn' value={'Add new'} />
            <List todoList={todoList} />
        </form>
      </div>
    );
  }
}

export default App;
