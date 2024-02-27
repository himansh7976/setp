import { useState } from "react";

function HideShow(){
    const [showwdata,setdata]=useState(true);

   
    return(
        <div>
        {

        showwdata?<h1>menu</h1>:null
        }
       
       
        <button  onClick={()=>{
            setdata(true)
        }}>show</button>
        <button onClick={()=>{
            setdata(false)
            console.log("himnhu")
        }}>hide</button>
        </div>
    )
}
export default HideShow;