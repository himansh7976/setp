import { useState } from "react";

function Validation() {

    const [user, setuser] = useState("")
    const [pass, setpass] = useState("")
    return (
        <>
            <hr></hr>
            <h1>Form validation class 19</h1>
            <form onSubmit={(e) => {
                alert("heloo")
                e.preventDefault();

            }}>

                <input type="text" placeholder="enert user id " onChange={(e) => {
                  let item=e.target.value;
                  if(item.length <3){
                   console.log("invalid")
                  }
                    console.log(user)
                }}></input> <br />
                <input type="text" placeholder="enert password "></input> <br />
                <button>Login</button>
            </form>



        </>

    )
}
export default Validation;