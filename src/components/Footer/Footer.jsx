import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    state = {
        selected: 'all'
    };
    setFilter = (filter) => {
        this.setState({selected: filter});
        this.props.onChangeFilter(filter);
        console.log("filter : state", filter, this.state.selected);
    }
    isActive = (value) => {
        return ((value == this.state.selected) ? 'selected' : '');
    }
    render() {
        return (
            <footer className="App-footer">
                <span className="App-todo-count">
                    <span>{this.props.leftCount}</span>
                    <span> </span>
                    <span>items </span>
                    <span>left</span>
                </span>
                <ul className="App-filters">
                    <li>
                        <a href="#" className={this.isActive('all')} 
                                    onClick={this.setFilter.bind(this, 'all')}>
                                    All
                        </a>
                        <span> </span>
                        </li>
                    <li>
                        <a href="#" className={this.isActive(false)} 
                                    onClick={this.setFilter.bind(this, false)}>
                                    Active
                        </a>
                        <span> </span>
                        </li>
                    <li>
                        <a href="#" className={this.isActive(true)} 
                                    onClick={this.setFilter.bind(this, true)}>
                                    Completed
                        </a>
                        <span></span>
                        </li>
                </ul>     
            </footer>
        );
    }
}
Footer.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
  };
Footer.defaultProps = {
    onClick: () => ({})
  };

export default Footer;