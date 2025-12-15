import React, { Component } from 'react'

export default class Task1 extends Component {
    constructor() {
        super()
        this.state = {
            label: 'Hello React'
        }
    }
    componentDidMount() {
        console.log(first)
    }
    change = () => {
        this.setState({
            label: 'Welcome to the react task1'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.label}</p>
                <button onClick={this.change}>Change</button>
            </div>
        )
    }
}
