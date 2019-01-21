import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
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
  todoList: [["Hello, i am Michael", false], ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quo id ad maxime expedita architecto, maiores quod. Sapiente quam dolorem dolore ipsa suscipit tenetur doloremque ut cum neque, repellendus maxime, eos quod debitis aliquam, provident, fugit ratione non sequi voluptate fuga quibusdam nihil pariatur quia aperiam quisquam. Similique voluptatum vero sunt enim, consequuntur optio. Laboriosam qui ab maxime, adipisci", false]]
};
  componentDidMount() {}
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value) {
      this.setState(({todoList, value, completed}) => ({
        todoList: [...todoList, [value, completed]],
        value: ''
      }));
    }
    
  }
//  todoCompletedListener = (function(todoList) {
//   this.state.todoList.forEach(function(item) {
//     if(item[1]) {
//       document.getElementsByClassName('App-todo-text').setAttribute('completed');
//     }
//   }) 
  
//  })(this.state.todoList);
  onChange = (event) => {
    this.setState({value: event.target.value});
    
  };
  onCheckProperty =() => {
    console.log(this.state.todoList[0][1]);
  }
  
  render() {
    const {todoList, value} = this.state;
    return (
      <div className="App">
          <form className="App-form" onSubmit={this.handleSubmit}>
            <header className="App-input-header">
              <h1 className="App-todo-header">todos</h1>
              <input placeholder="What needs to be done?" className="App-input-text" type="text" value={value} onChange={this.onChange} />
            </header>
          
              {/* <Input ref={this.input} className="App-input" ></Input> */}
            {/* <Button value={'Add new'}></Button> */}
            <List todoList={todoList}></List>   
          {/* <Checkbox onClick = {this.onChecked} /> */}
          
          </form>
        <input type="button" value={"check"} onClick={this.onCheckProperty}/>
      </div>
    );
  }
}

export default App;
