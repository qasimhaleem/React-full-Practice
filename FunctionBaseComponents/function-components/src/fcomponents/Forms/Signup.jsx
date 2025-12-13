import React from 'react'
import { useState } from 'react'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)

    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="username"
                id='username'
                name='username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id='passwrord'
                name='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default Signup