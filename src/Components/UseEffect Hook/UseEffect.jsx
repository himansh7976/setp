import React, { useEffect, useState } from "react";
function UseEffect() {
    const [count, setcount] = useState(0);
    const [count2, setcount2] = useState(5);


    useEffect(() => {
        // console.log("useeffect call")
    })
    return (
        <div>
            <hr></hr>
            <h1>USeEffect hook {count}</h1>
            <button onClick={() => { setcount(count+1) }}>upadte counter</button>
        </div>
    )
}
export default UseEffect;