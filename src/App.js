import React, { Component } from 'react';
import './App.css';
import Checkbox from './components/checkbox';
import Input from './components/input';
import Button from './components/Button';

class App extends Component {
  getDerivedStateFromProps() {}

  componentDidMount() {}

  onClick = (e)=> {
    console.log ('e.target: ', e.target);
  }

  render() {

        return (
      
      <div className="App">
        <Checkbox onClick={this.onClick} />
        <Input onClick={this.onClick} />
        <Button onClick={this.onClick} />
      </div>
    );
  }
}

export default App;