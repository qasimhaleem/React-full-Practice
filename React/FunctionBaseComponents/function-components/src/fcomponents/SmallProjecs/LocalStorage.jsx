import React, { useState, useEffect } from 'react'

const LocalStorage = () => {
    const [text, setText] = useState("")
    useEffect(() => {
        localStorage.setItem("text", text)
    }, [text])
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <form action="">
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={handleChange} />
            </form>
            {localStorage.getItem("text")}
        </div>
    )
}
export default LocalStorage