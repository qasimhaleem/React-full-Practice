import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props);

    }
    OnClic = () => {
        this.props.change(10);

    }
    render() {
        return (
            <div>
                <button onClick={this.OnClic}>Predic Value</button>
            </div>
        )
    }
}
