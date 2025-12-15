import React, { useState, useEffect } from "react";
import axios from 'axios'

const Use = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        console.log("state change")
        const loadData = async () => {
            const res = await axios.get("https://api.github.com/users")
            setList(res.data)
        }
        loadData();
    }, [])
    return (
        <div>
            <button >Data</button>
            <ul>{list.map(m =>
                <li key={m.id}>{m.login}</li>
            )}</ul>
        </div>
    )
}
export default Use;