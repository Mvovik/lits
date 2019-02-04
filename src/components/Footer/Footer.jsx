import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <span className="App-todo-count">
                    <span>0</span>
                    <span> </span>
                    <span>items </span>
                    <span>left</span>
                </span>
                <ul className="App-filters">
                    <li>
                        <a href="#" className="selected">All</a>
                        <span> </span>
                        </li>
                    <li>
                        <a href="#">Active</a>
                        <span> </span>
                        </li>
                    <li>
                        <a href="#">Completed</a>
                        <span></span>
                        </li>
                </ul>     
            </footer>
        );
    }
}

export default Footer;