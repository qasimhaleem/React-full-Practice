import React, { Component } from 'react'

export default class Incremeant extends Component {
    constructor(props) {
        super(props);

    }
    increValue = () => {
        this.props.incr(1)
    }
    render() {
        return (
            <div>
                <button onClick={this.increValue}>Increament</button>

            </div>

        )
    }
}

