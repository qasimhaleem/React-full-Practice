import React, { Component } from 'react'

export default class ShowHide extends Component {
    constructor() {
        super();
        this.state = {
            stauts: true
        }
    }
    change = () => {
        this.setState({
            stauts: !this.state.stauts
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.change}>

                    {(this.state.stauts ? 'Hide' : 'Show')}

                </button>
                {(this.state.stauts && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum corrupti mollitia officiis, perferendis dolores harum, itaque architecto modi omnis error libero nostrum, atque quod aspernatur distinctio vitae accusamus enim!</p>)}
            </div>
        )
    }
}
