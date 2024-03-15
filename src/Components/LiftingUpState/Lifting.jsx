import React from 'react'
import Chlid from './Chlid'


function Lifting() {
 function parent(data){
  alert(data)
 }
 


  return (
    <div>
      <hr />
      <h1>Send Data Chlid to Parent Componets</h1>

      <Chlid data={parent} />


    </div>
  )
}


export default Lifting