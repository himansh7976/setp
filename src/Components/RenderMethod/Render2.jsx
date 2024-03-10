import React from "react";

 export class Renderr extends React.Component{
    render(){

        console.log("render ji bhaishab")
     return(
        <div>
            <h1>new render {this.props.name} </h1>
   
        </div>
     )
    }
}