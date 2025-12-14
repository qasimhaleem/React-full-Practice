import React, { useRef } from "react";

const Ref = () => {
    const RefrenceRef = useRef(0);
    const handleCli = () => {
        RefrenceRef.current = RefrenceRef.current + 1;
        console.log(RefrenceRef)
    }
    return (
        <div>
            <p>This is your counter</p>
            <h1>{RefrenceRef.current}</h1>
            <button onClick={handleCli}>Increament</button>
        </div>
    )
}
export default Ref;