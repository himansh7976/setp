import React from 'react'
import { ForwardedRef } from 'react'


function ChildReff(props,ref) {
  return (
    <div>
        <input  ref={ref}></input>
    </div>
  )
}

export default ChildReff