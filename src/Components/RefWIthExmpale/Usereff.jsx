import React from 'react'

import { useRef } from 'react';

function Usereff() {
  let inputref = useRef(null);
  function inputhandle() {
    inputref.current.value = "1000";
    inputref.current.focus();

  }

  return (
    <div>
      <h1>Reff Use for Dom Manuplation</h1>
      <p>use for manupaliton in dom like change color updateb something</p>
      <input type='text' ref={inputref}></input>
      <button onClick={inputhandle}>update</button>


    </div>
  )
}

export default Usereff