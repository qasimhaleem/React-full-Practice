import React, { Component } from "react";

class Name extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.id}
                {this.props.name}

            </div>
        )
    }
}
export default Name;