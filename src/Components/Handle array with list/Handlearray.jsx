function Handlearray() {
    const students = [
        { name: "himasnhu", email: "himanshu2gmail.com", contact: "799779" },
        { name: "hisnhu", email: "nshu2gmail.com", contact: "767675" },
        { name: "snhu", email: "nshil.com", contact: "75" },
    ]

    return (
        <>
            <hr />
            <h1>handle Array</h1>
            {
                students.map((item) =>
                    <h3> name : {item.name}  {item.email} , {item.contact} </h3>

                )
            }

        </>

    )
}
export default Handlearray;