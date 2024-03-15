import React from "react";
export class PureCOmo extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }
    render() {
        console.log("check renddring")
        return (
            <>
                <hr />
                <h1>Pure componets {this.state.count} </h1>
                <button onClick={() => this.setState({count : this.state.count + 1})}>Click</button >
            </>

        )
    }
}