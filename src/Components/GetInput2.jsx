import { useState } from "react";
import App from './../App';

function GetInput2(){

//   const [inp,setinp]= useState(null)
  
  
//   function chng(val){
      
//       setinp(val.target.value)
//       console.log(val.target.value)
      
//     }
//     const [inp2,setinp2]= useState(false)

//     function pt(){
        
//             setinp2(true)

        
//     }
//     return(
//         <div>
//         <hr/>
//             <h1>get input 2</h1>
//             {

//         inp2?<h1>{inp}</h1>:null
//             }

//             <input type="text" placeholder="input2" onChange={chng}></input>
//             <button onClick={pt} >print</button>
//         </div>

//     )
const [chnge,setchnge]=useState(null)

function chng(val){
    console.log( val.target.value);
    setchnge(val.target.value)
//   setchnge2(false)
}
const [chnge2,setchnge2]=useState(false)

function printt(){

    // console.log(chnge)
    setchnge2(true);
    console.log(chnge2)
}

return(
    <>
    {
        chnge2?<h1>{chnge}</h1>:null
    }
  <input type="text" onChange={chng}></input>
   <button onClick={printt}>print</button>
    </>

)
}

export default GetInput2;