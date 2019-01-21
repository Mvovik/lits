import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
        <label>
            <input type="text" value={value} onChange={this.onChange} className="mainInput" autoFocus />
        </label>
        );
    }
}

export default Input;