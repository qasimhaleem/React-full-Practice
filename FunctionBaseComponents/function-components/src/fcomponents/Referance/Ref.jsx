import React, { useRef } from "react";

const Ref = () => {
    const RefrenceRef = useRef(0);
    const handleCli = () => {
        RefrenceRef.current = RefrenceRef.current + 1;
        console.log(RefrenceRef.current)
    }
    console.log("i rendered")
    return (
        <div>
            <p>Open the console there i increamented</p>
            <button onClick={handleCli}>Increament</button>
        </div>
    )
}
export default Ref;