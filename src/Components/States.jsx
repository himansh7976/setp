import { useState } from "react";

let Statess = () => {
  let [data,setdata]=useState("before chnage")
  
  let [data2,setdata2]=useState(0)
  function update(){
      setdata("after chnage")
      setdata2(data2+1)
    }
    


    
    return (
        <div>
            <hr />
            <h1> use states </h1>
            <h1>{data}</h1>
            <h2>{data2}</h2>
            <button onClick={update}>update data</button>
        </div>

    )
}
export default Statess;