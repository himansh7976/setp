import { useState } from "react";

function Propss(props){
   const [data,setdata]=useState("himanshu")
    function clicked(){
        setdata("ayush")

    }

    return(
        <div>
        <hr/>
            <h1>props components</h1>
            <h2>{data}</h2>
            <button onClick={clicked}>click me</button>

        </div>

    )
}
export default Propss;