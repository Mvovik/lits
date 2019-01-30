import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';

export default class ListItem extends Component {
  static propTypes = {
    prop: PropTypes
  };
  state = {
    showMe: false
  };

  onClick = () => {
    this.setState({ showMe: true });
  };

  onSave = (...arg) => {
    const { onSave } = this.props;
    this.setState({ showMe: false });
    onSave(...arg);
  };

  onDoubleClick = (key, value) => {
    const { showMe } = this.state;
    if (showMe) {
      return <Input onSave={this.onSave} item={{ value, key }} />;
    } else {
      return <label onClick={this.onClick}>{value}</label>;
    }
  };

  render() {
    const {
      item: { key, item }
    } = this.props;
    return <li key={key}>{this.onDoubleClick(key, item)}</li>;
  }
}
