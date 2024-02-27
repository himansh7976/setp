import { useState } from "react";

function New(props){
    const [data,setdata]=useState(0)
    
    function clicked(){
        setdata(data+1)


    }

   
   
return(
    <>

    <h1>{props.title}</h1>
    <button onClick={clicked}>heloo</button>
    
   
   
   
    </>
)
}
export default New;