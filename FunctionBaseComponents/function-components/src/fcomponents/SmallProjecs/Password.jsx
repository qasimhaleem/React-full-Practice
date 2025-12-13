import React, { useState } from 'react'

const Password = () => {
    // const [lable, setLable] = useState("text")
    const [status, setStatus] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(!status)


    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type={(status) ? 'text' : 'password'}
                    name=""
                    id=""
                />
                <button>
                    {(status) ? 'Password' : 'Strings'}
                </button>
            </form>
        </div>
    )
}

export default Password