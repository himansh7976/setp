import { useState } from "react";

function FormHandel() {
    const [namee, setnamee] = useState("");
    const [namee2, setnamee2] = useState(false)
    const [namee3, setnamee3] = useState("");




    function getformdata(e) {
        console.log(namee, namee2, namee3)
        e.preventDefault()
        console.log(e.preventDefault())

    }
    const [data, setdata] = useState("")
    const up = () => {
        setdata(namee2, namee3)
        console.log("hello")

    }
    return (
        <>

            <hr />
            <h1>form handel</h1>
            <h3>{data}</h3>
            <form onSubmit={getformdata}>
                <input type="text" placeholder="enetr text" onChange={(e) => {
                    setnamee(e.target.value);
                }}></input> <br /><br />
                <select onChange={(e) => {
                    setnamee2(e.target.value)
                }}>
                    <option >selet option</option>
                    <option>marvel</option>
                    <option>Dc</option>
                    <option>bc</option>
                </select>
                <br />
                <br />

                <input type="checkbox" onChange={(e) => {
                    setnamee3(e.target.checked)
                }}>
                </input>
                <span>accpet term and condition</span> <br /> <br />
                <button type="" onClick={up}>Submit</button>


            </form>

        </>


    )
}

export default FormHandel;