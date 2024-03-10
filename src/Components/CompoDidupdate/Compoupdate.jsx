import React from "react";
export class Compoupdate extends React.Component {

    constructor() {
        super();
        console.warn('consturter')
        this.state = {
            name: "ayushji bhai"
        }

    }

    componentDidUpdate(prev) {
        console.warn("COMPOdidupdate",prev)
    }
    render() {
        console.warn("render")

        {
            return (
                <div>
                    <hr />
                    <h1>{this.state.name}</h1>
                    <h1></h1>
                    <button onClick={() => { this.setState({ name: "himansh jinsbbd" }) }}>click</button>

                </div>

            )
        }
    }
}