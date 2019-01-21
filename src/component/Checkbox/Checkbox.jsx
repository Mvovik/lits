import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        return (
            <label class="switch">
                <input type="checkbox" />
                <span class="check-button round"></span>
            </label>
        );
    }
}

export default Checkbox;