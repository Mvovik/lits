import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ENTER_KEY_CODE = 13;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.item.value || ''
    };
  }

  // componentDidMount() {
  //   this.setState({ value: this. });
  // }

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  save = () => {
    const { item, onSave } = this.props;
    const { value } = this.state;
    console.log('key', item.key);
    onSave(item.key, value);
    this.setState({
      value: ''
    });
  };

  onKeyDown = event => {
    console.log('event.keyCode', event.keyCode);
    if (event.keyCode === ENTER_KEY_CODE) {
      this.save();
    }
  };

  render() {
    return (
      <input
        type="text"
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        value={this.state.value}
      />
    );
  }
}

export default Input;
