import React from "react";
function Second(props){
    return(
        <>
        <hr></hr>
        <h2>Second Function call as a props</h2>
        <button  onClick={props.set}> call the function</button>

        </>

    )
}
export default Second;