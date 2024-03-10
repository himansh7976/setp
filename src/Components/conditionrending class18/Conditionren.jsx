import React, { useState } from "react";
function Condition() {
    const [data, setdata] = useState(2)




    return (
        <>

            <hr></hr>
            <h1> Condition Rendring class 18</h1>
            {

                data == 1 ? <h1>trueee1</h1> 
                : data == 2 ? <h1>falseee</h1>
                 : <h1>welcomeji</h1>
            }



        </>

    )
}
export default Condition;