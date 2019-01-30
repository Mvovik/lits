import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clear extends Component {
    onClick = (e) => {
        const {todoList} = this.props;
        
    }
    render() {
      const { value="Clear completed", completed = false } = this.props;
      return completed && <div className="clear-completed">
            <button onClick={this.onClick}>{value}</button></div>;
    }
  }
      
  Clear.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
  };
  
  Clear.defaultProps = {
    onClick: () => ({})
  };
  
  export default Clear;