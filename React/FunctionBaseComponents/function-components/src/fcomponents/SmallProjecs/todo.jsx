import React, { useState } from 'react'
const Todo = () => {
    const [text, setText] = useState("")
    const [list, setList] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setList(list.concat(text))
        e.target.value = ""
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
            <ul>{list.map((m, i) => {
                return <li key={i}>{m}</li>
            })}</ul>
        </div>
    )
}

export default Todo;