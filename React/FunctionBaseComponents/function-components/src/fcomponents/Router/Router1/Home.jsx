import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Link to='/product/1'>bottel</Link>
            <br />
            <Link to='/product/2'>pen</Link>
            <br />
            <Link to='/product/3'>cup</Link>

        </div>
    )
}

export default Home