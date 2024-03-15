import React from 'react'
import { useState } from 'react'

function Hoc() {
  return (
    <div>
    <hr/>
        <h1>High order Components</h1>
        <High cmp={Counter} />
    </div>
  )
}

function High(props){
    return(
        <h1> {props.cmp} </h1>


    )
}

function Counter(){
    const [count,setcount]=useState(0)
    return(
        <div>
            <h4> {count} </h4>
            <button onClick={()=>{setcount(count+1)}}>Update</button>
        </div>
    )
}

export default Hoc