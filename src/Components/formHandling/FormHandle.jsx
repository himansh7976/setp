import { useState } from "react";

function Forms() {
    const [data,setdata]=useState("")
    return (
        <>
            <hr />
            <h1>Form haandleing</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>

                <input type="text" placeholder="enetr name" style={{ marginLeft: "50%" }} onChange={(e)=>{
                    console.log(e.target.value)
                }} ></input>
                <button>submit</button>
            </form>
        </>

    )
}
export default Forms;