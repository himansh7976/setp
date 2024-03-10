import React, { useState } from "react"
function Hooks1() {
    const [data, setdata] = useState("hello");

    return (
        <div>
            <hr />
            <h1>Hooks in raect js</h1>
            <h2>{data}</h2>
            <button onClick={() => { setdata("himan") }}>update change</button>

        </div>

    )
}
export default Hooks1