import { useState } from 'react'

const Input = () => {
    const [text, setText] = useState("")
    const change = (e) => {
        setText(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('testing...')

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={change} />
                <button>Add</button>
                <p>{text}</p>
            </form>
        </div>
    )
}
export default Input;