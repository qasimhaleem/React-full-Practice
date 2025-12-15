import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const reset = () => {
        setCount(0)
    }

    const incre = () => {
        setCount(count + 1)
    }

    const decre = () => {
        setCount(count - 1)
    }

    return (

        <div>
            <h1>{count}</h1>
            <button onClick={reset}>Reset</button>
            <button onClick={incre}>Increament</button>
            <button onClick={decre}>Decreament</button>
        </div>
    )
}
export default Counter