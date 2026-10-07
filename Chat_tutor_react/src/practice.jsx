import React, { useState } from "react";


export default function Calculate(){
    const [count, countState] = useState(0);

    return (
        <>
        <h1>hii</h1>
        <button onClick={countState(res => res + 1)}>Increase</button>
        {count}
        </>
    )
}