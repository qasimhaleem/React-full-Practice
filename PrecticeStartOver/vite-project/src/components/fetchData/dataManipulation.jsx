import React, { Component } from 'react'
import axios from "axios"
export default class Data extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    loadData = async () => {
        const res = await axios.get("https://api.github.com/users")
        this.setState({
            list: res.data
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.loadData}>Fetch</button>
                <ul>
                    {this.state.list.map((m) =>
                        <li key={m.id}>
                            {m.login}</li>
                    )}
                </ul>

            </div>
        )
    }
}
