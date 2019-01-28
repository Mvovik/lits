import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrossIcon from '../Icons/CrossIcon';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button';


class Footer extends Component {
    render() {
        const { value="Click", onSubmit } = this.props;
        return <footer class="info">
                <p>Double-click to edit a todo</p>
                <p>Created by <a href="http://github.com/petehunt/">petehunt</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
    }
  }

export default Footer;


