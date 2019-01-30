import React, { Component } from 'react';
import PropTypes from 'prop-types';


const ENTER_KEY_CODE = 13

class Input extends Component {
  constructor(props) {
    super(props)
    this.onSave = props.onSave
    this.state = {
      value: props.value
    }
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  save() {
    this.onSave(this.state.value)
    this.setState({
      value: ''
    })
  }

  onKeyDown = event => {
    if (event.keyCode === ENTER_KEY_CODE) {
      this.save()
    }
  }

  render() {
    console.log(this.props.value)
    return (
      <input
        type="text"
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
        onSave={this.save.bind(this)}
        value={this.state.value} />
    )
  }
}

export default Input












/*
class Input extends Component {
  render() {
    return <input type="text" {...this.props} />;
  }
}

Input.propTypes = {
  onClick: PropTypes.func.isRequired
};

Input.defaultProps = {
  onClick: () => ({})
};

export default Input;
*/