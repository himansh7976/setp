import React, { useEffect, useState } from "react";
import UseEffect from './UseEffect';
function Speficuseeffct() {
    const [data, setdata] = useState(10)
    const [count, setdcount] = useState(10)
    useEffect(() => {
        console.log(" speficeuse effect call")
    })
    return (
        <div>
            <hr />
            <h1>spefice use UseEffect</h1>
            <h2>Count {count} :</h2>
            <button onClick={() => { setdcount(count + 1) }}>Update count</button>
            <h3>Count two {data} :</h3>
            <button onClick={()=>{setdata(data+1)}}>COunt TWo</button>

        </div>
    )
}
export default Speficuseeffct;