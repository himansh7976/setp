import React from "react";
export class Composhould extends React.Component {

    constructor() {
        super();
        this.state = { count: 0 }
    }
    shouldComponentUpdate() {
        console.warn("should")
        if(this.state.count >5 && this.state.count<10){
 
            return true;
        }
    }
    render() {

        return (
            <div>
                <hr />
                <h1>Should components updateing {this.state.count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>click</button>
            </div>
        )
    }
}