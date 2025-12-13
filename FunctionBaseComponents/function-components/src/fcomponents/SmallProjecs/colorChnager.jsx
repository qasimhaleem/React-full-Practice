import React, { useState } from 'react'

const ColorChnager = () => {
    const [color, setColor] = useState("white");
    const turnBlue = () => {
        setColor("blue")
    }
    const turnRed = () => {
        setColor("red")
    }
    const turnGreen = () => {
        setColor("green")
    }
    const boxStyle = {
        width: "300px",
        height: "200px",
        backgroundColor: color,
        margin: "50px auto",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
    };

    return (
        <div>
            <div style={boxStyle}>
                <button onClick={turnRed}>Red</button>
                <button onClick={turnGreen}>Green</button>
                <button onClick={turnBlue}>Blue</button>
            </div>

        </div >
    )
}

export default ColorChnager;