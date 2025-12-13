import React, { Component } from 'react'
import Button from './Button'

export default class Display extends Component {
    constructor() {
        super();
        this.state = {
            num: 1,
        }
    }
    changeValue = (n) => {
        this.setState({
            num: n
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <Button change={this.changeValue}></Button>
            </div>
        )
    }
}
