import React from 'react'
import Propss from './../Props';

function Chlid(props) {

    const name="himanshu";

    

    return (
        <div>
        <h2>Child Components</h2>
        <h3>Receved Data form Perents  </h3>
        <button onClick={()=>{props.data(name)}}>CLick Me</button>

          

        </div>
    )
}

export default Chlid