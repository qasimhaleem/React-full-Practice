import React from 'react'

const Greet = (props) => {

    return (
        <div>

            {(props.name != "") && <h1>Hello {props.name}</h1>}
        </div>
    )
}

export default Greet