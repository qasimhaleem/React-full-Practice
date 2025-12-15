import React, { useState } from 'react'

const Toggel = () => {
    const [status, setStatus] = useState(true);
    const change = () => {
        setStatus(!status)
    }
    return (
        <div>
            <button onClick={change}>{
                (status) ? 'Hide' : 'Show'
            }</button>
            {(status && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum ea ab exercitationem rem vitae pariatur nobis dolorem consequuntur animi totam quidem, dolores officiis eum, doloribus hic, velit vel debitis.</p>)}
        </div>
    )
}

export default Toggel;