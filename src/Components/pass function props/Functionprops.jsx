import React from "react";
function Functionprops(props){
    return(
        <>
        <hr></hr>
        <h1>Pass function as a props</h1>
        <button  onClick={()=>{props.get()}}> call the function</button>

        </>

    )
}
export default Functionprops;