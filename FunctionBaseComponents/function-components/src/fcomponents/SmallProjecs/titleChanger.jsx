import React, { useState, useEffect } from 'react'

const TitleChanger = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("run")
        document.title = `Like ${count}`

    }, [count])
    return (
        <div>
            <h1>Look for the title/tab name</h1>
            <button onClick={() => { setCount(count + 1) }}>Change</button>
        </div>
    )
}

export default TitleChanger