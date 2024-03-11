import Usercompo from "./User";
const Reusecompo=()=>{

    const users = [
        {
            name: "himanshu", email: "himnhu@gmail.com", address: "rajat path"
                
        },
        {
            name: "anshu", email: "hnhu@gmail.com", address:"vijaypth"
             
        },
        {
            name: "himhu", email: "mnhu@gmail.com", address: "krishna"
        },
    ]
    return(
        <>
        <hr/>
            <h1>Reuse Components with list</h1>
            {
                users.map((item,i)=>
                <Usercompo data={item}/>
              
               
                )
            }


        </>

    )
}
export default Reusecompo;