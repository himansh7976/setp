import Table from 'react-bootstrap/Table';
const Nested = () => {
    const users = [
        {
            name: "himanshu", email: "himnhu@gmail.com", address: [
                { house: "10", city: "noida", country: "india" },
                { house: "10", city: "noida", country: "india" },
                { house: "10", city: "noida", country: "india" },
            ]
        },
        {
            name: "anshu", email: "hnhu@gmail.com", address: [
                { house: "8", city: "ida", country: "ina" },
                { house: "60", city: "oida", country: "dia" },
                { house: "107", city: "ida", country: "dia" },

            ]
        },
        {
            name: "himhu", email: "mnhu@gmail.com", address: [
                { house: "10", city: "noida", country: "ndia" },
                { house: "10", city: "noida", country: "iia" },
                { house: "10", city: "noida", country: "ind" },
            ]
        },
    ]
    return (
        <>
            <h1>List With Nested Array</h1>
            <Table>
                <tbody>
                    <tr>

                        <td>name</td>
                        <td>email</td>
                        <td>Addres</td>
                    </tr>
                </tbody>
                {
                    users.map((data) => {
                        <tr>



                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            {
                                data.address.map((item) => {

                                    <h5>{item.city}</h5>
                                })
                            }




                        </tr>
                    })
                }


            </Table>


        </>

    )
}
export default Nested;