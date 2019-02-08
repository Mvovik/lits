import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Footer from './components/Footer';
import Info from './components/Info/Info';

class App extends Component {
  constructor(props) {
    super(props);
  }

  input = React.createRef();

  state = {
    value: '',
    completed: false,
    todoList: [],
    filter: 'all'
  };
  isToggleAll = false;

  changeFilter = (filter) => {
    this.setState({filter: filter});
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

  onCompleted = (item, event) => {
    event.stopPropagation();
    event.preventDefault();
    let { todoList } = this.state;
    console.log('item :', item);
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

  onToggleAll =(event) => {
    event.preventDefault();
    event.stopPropagation();
    let todoList = this.state.todoList;
    console.log(todoList);
    if (this.isToggleAll == 0) {
    todoList.map(element => {
      if(element.completed == false)
        element.completed = true;
        console.log(element.completed);
    });
    this.isToggleAll = true;
  }
  else {
    todoList.map(element => {
        element.completed = false;
  });
this.isToggleAll = false;
  }
    this.setState({todoList});
  }
  onChange = event => {
    this.setState({ value: event.target.value });
  };


  render() {
    const { todoList, value } = this.state;
    let filteringList = this.state.todoList;
    if (this.state.filter != 'all') {
    filteringList = filteringList.filter((item) => item.completed == this.state.filter);
    }
    let leftCount = this.state.todoList.filter((item) => item.completed == false);
    console.log(leftCount.length);
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
          <header className="App-input-header">
            <h1 className="App-todo-header">todos</h1>
            <label htmlFor="" className={`App-toggle-all ${this.isToggleAll ? ' Toggle-all-completed' : ''}`}onClick={this.onToggleAll}></label>
            <input
              placeholder="What needs to be done?"
              className="App-input-text"
              type="text"
              value={value}
              onChange={this.onChange}
            />
          </header>
          <List
            todoList={filteringList}
            leftCount={leftCount.length}
            onDelete={this.onDelete}
            onCompleted={this.onCompleted}
          />
        </form>
        <Footer onChangeFilter={this.changeFilter}
                leftCount={leftCount.length}/>
        <Info/>
      </div>
    );
  }
}

export default App;
