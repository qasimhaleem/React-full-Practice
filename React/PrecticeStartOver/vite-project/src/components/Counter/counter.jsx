import React, { Component } from "react";
import Reset from "./reset";
import Decremeant from "./decremeant";
import Incremeant from "./incremeant";
export default class Count extends Component {
    constructor() {
        super();
        this.state = {
            num: 0,
        }
    }
    restCounter = (n) => {
        this.setState({
            num: n,
        })

    }

    incrCounter = (n) => {
        this.setState({
            num: this.state.num + n
        })
    }

    decrCounter = (n) => {
        this.setState({
            num: this.state.num - n
        })
    }


    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <Reset reset={this.restCounter} />
                <Incremeant incr={this.incrCounter} />
                <Decremeant incr={this.decrCounter} />

            </div>
        )
    }
}
