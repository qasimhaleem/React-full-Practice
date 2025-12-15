import React from 'react'
import { useState } from 'react'

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
    }
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                id="text"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>login</button>
        </form>

    )
}

export default Form