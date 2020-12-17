import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    static defaultProps = {
        allColor: ['purple', 'magenta', 'lilac', 'pink']
    }
    constructor(props) {
        super(props);
        this.state = { color: 'purple'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

    }
    render() {
        return (
            <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}>
            </div>
        );
    }
}

export default Box;