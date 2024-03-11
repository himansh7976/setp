import Table from 'react-bootstrap/Table';
const BootList = () => {
    const user = [
        { name: "himasnhu", email: "himanshu2gmail.com", contact: "799779" },
        { name: "hisnhu", email: "nshu2gmail.com", contact: "767675" },
        { name: "snhu", email: "nshil.com", contact: "75" },
    ]



    return (
        <>
            <hr />

            <h1>List Bootstrrip</h1>
            <Table>

                <tbody>

                    {
                        user.map((item, idx) =>
                            item.contact === "75" ?
                                <tr key={idx}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                </tr>
                                : null

                        )
                    }
                </tbody>




            </Table>
        </>

    )
}

export default BootList;