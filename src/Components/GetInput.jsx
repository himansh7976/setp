import { useState } from "react";

function GetInput() {
    // const [data,setdata]=useState(false)
    // const [data2,setdata2]=useState(true)

    //  function getdata(val){
    //     console.log(val.target.value)
    //     setdata(val.target.value)


    //  }
    const [data, setdata] = useState("");

    const update = (val) => {
        setdata(val.target.value)
        console.log(val.target.value);

    }


    const clicked = () => {
        setdata(data)
        console.log(data);


    }


    return (
        <>
            <h1>{data}</h1>


            <input type="text" placeholder="hihi" onChange={update}></input>
            <button onClick={clicked}>Submit</button>
        </>
        // <div>
        // {
        //     data2?
        //     <h1> {data}</h1>
        //     :null
        // }


        // <input type="text" onChange={getdata}></input>
        // <button onClick={()=>{setdata2(true)


        // }}>PRINT Vlue</button>
        // </div>


    )
}
export default GetInput;