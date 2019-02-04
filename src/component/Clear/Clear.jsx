import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clear extends Component {

    onClick = (e) => {
            const {todoList} = this.props;
      todoList.forEach(function(item, i, arr){
        if(item.completed===true) {arr.splise(i,1)}
      });
      
        
    }
    render() {
      const {value="Clear completed", completed = false } = this.props;
      return completed &&  <div className="clear-completed">
            <button onClick={this.props.onClear.bind(this, null)}>{value}
            </button>
      </div>;
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