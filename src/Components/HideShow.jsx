import { useState } from "react";

function HideShow() {
    // const [showwdata,setdata]=useState(true);


    // return(
    //     <div>
    //     {

    //     showwdata?<h1>menu</h1>:null
    //     }


    //     <button  onClick={()=>{
    //         setdata(true)
    //     }}>show</button>
    //     <button onClick={()=>{
    //         setdata(false)
    //         console.log("himnhu")
    //     }}>hide</button>
    //     </div>
    // )\\
    const [data, setdata] = useState(true);
    function showw() {
        setdata(true);

    }
    function hidee() {
        setdata(false)
    }

    return (

        <>
            <hr></hr>

            {
             data?<h1>hello</h1>:null
            }
            {/* <h1>hello world</h1> */}
            <button onClick={hidee}>hide</button>
            <button onClick={showw}>show</button>
        </>
    )
}
export default HideShow;