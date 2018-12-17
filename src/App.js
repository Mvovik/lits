import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUserInput(input){
    this.setState({
      userInput: input
    });
  }

  addToList(input){
    let listArray = this.state.list;
    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <h1>TODOS</h1>
          <input 
            type="text" 
            className="userInput"
            placeholder="What needs to be done?"
            value={this.state.userInput}
            onChange={(e) => this.changeUserInput(e.target.value)}
          />
          <button 
            className="btn" 
            onClick={() => this.addToList(this.state.userInput)}
          >Submit</button>
          <ul>
            {this.state.list.map((val) => <li className="list">{val}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
