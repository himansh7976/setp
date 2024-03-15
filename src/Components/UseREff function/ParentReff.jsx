import React, { useRef } from 'react'
import ChildReff from './ChildReff'
import Usereff from './../RefWIthExmpale/Usereff';

function ParentReff() {
    let inputreff=useRef(null);
    function updatereff(){
        inputreff.current.value="5000"
    }
  return (
    <div>
    <hr/>
    <h1>use Reff for funtion</h1>
    <ChildReff ref={inputreff} />
    <button onClick={updatereff}>chick</button>

    </div>
  )
}

export default ParentReff