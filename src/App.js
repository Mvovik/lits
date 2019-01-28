import React, { Component } from 'react';
import './App.css';
import Button from './component/Button';
import List from './component/List';
import Footer from './component/Footer';

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
      <div>
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
        <Footer/>  
      </div>
    );
  }
}



/*<footer class="info">
<p>Double-click to edit a todo</p>
<p>Created by <a href="http://github.com/petehunt/">petehunt</a></p>
<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>*/
/*
<footer class="footer" data-reactid=".0.2"><span class="todo-count" data-reactid=".0.2.0"><strong data-reactid=".0.2.0.0">1</strong><span data-reactid=".0.2.0.1"> </span><span data-reactid=".0.2.0.2">item</span><span data-reactid=".0.2.0.3"> left</span></span><ul class="filters" data-reactid=".0.2.1"><li data-reactid=".0.2.1.0"><a href="#/" class="selected" data-reactid=".0.2.1.0.0">All</a></li><span data-reactid=".0.2.1.1"> </span><li data-reactid=".0.2.1.2"><a href="#/active" class="" data-reactid=".0.2.1.2.0">Active</a></li><span data-reactid=".0.2.1.3"> </span><li data-reactid=".0.2.1.4"><a href="#/completed" class="" data-reactid=".0.2.1.4.0">Completed</a></li></ul></footer>
*/



export default App;


