import { useState } from "react";

function Student(props){
   const [data,setdata]=useState(props.name)


    console.log(props)
    return(

        <div style={{backgroundColor:"gray"}}>

        <h1  > hello {props.name}</h1>
        {/* <h2>email: {props.email}</h2> */}

        <button onClick={()=>{
            setdata(props.email)
        }}>tap</button>
        </div>

    )
}
export default Student;