import React, { Component } from 'react'
import Name from './name'
import Description from './description'
export default class Display extends Component {
    render() {
        return (
            <div>
                <Name
                    id='1'
                    name="qasim"
                />
                <Description
                    desc="i am a full stac developer"
                />

            </div>
        )
    }
}
