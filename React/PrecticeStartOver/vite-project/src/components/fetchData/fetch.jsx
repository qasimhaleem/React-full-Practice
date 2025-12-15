import React, { Component } from "react";

class Fetch extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    loadData = async () => {
        const Data = await fetch("https://api.github.com/users")
        const data = await Data.json();
        this.setState({
            list: data,
        })

    }
    render() {
        return (
            <>
                <button onClick={this.loadData}>fetch</button>
            </>
        )
    }
}

export default Fetch;