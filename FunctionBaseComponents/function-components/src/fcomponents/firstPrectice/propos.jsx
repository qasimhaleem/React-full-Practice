import { useState } from "react";
import Greet from "./Greet";

const Prop = () => {
    const [text, setText] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        // setText(e.target.value);
    }
    const handleChange = (e) => {
        const name = e.target.value
        setText(name)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <p>What is you name?</p>
                <input
                    type="text"
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <Greet name={text} />
        </div>
    )
}
export default Prop;