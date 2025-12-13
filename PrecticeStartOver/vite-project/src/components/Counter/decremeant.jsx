import React, { Component } from 'react'

export default class Decremeant extends Component {
    constructor(props) {
        super(props);
    }
    decr = () => {
        this.props.incr(1)

    }
    render() {
        return (
            <div>
                <button onClick={this.decr}>Decremeant</button>
            </div>
        )
    }
}
