import React, { Component } from 'react'

export default class Reset extends Component {
    constructor(props) {
        super(props);
    }
    sendValue = () => {
        this.props.reset(0);

    }
    render() {
        return (
            <div>
                <button onClick={this.sendValue}>Reset</button>

            </div>
        )
    }
}
