import React, { useEffect, useState } from 'react'
import SpecifcProps from './SpecifcProps'

function MainEffect() {
    const [data1, setdata1] = useState(0)
    const [data2, setdata2] = useState(10)

    useEffect(() => {
        console.log("effect called")
    }, [data1])
    return (

        <div>
            <hr />
            <SpecifcProps data1={data1} data2={data2} />
            <button onClick={() => { setdata1(data1 + 1) }}>click</button>
            <button onClick={() => { setdata2(data2 + 1) }}>click</button>


            MainEffect

        </div>
    )
}

export default MainEffect