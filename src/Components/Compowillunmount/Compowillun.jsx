import React from "react";
import { Secondwill } from "./SecondWill";

class Compowillun extends React.Component {

    constructor() {
        super();
        this.state = { show: true }
    }
    render() {
        return (
            <div>
                <hr />
                <h1>COmponents will unmount</h1>
                <Secondwill />

            <button onClick={()=>{this.setState({show:!this.state.show})}} >Toggle chil componets</button>
            </div>



        )
    }
}
export default Compowillun;