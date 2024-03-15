import React, { useState } from 'react'

function Controlcompo() {
   const [inp,setinp]=useState("")
     
  return (
    <div>
    <hr/>
        <h1>Controlled Compobets </h1>
        <input type='text' value={inp} onChange={(e)=>{setinp(e.target.value)}} ></input>

    </div>
  )
}

export default Controlcompo