import React from "react";

 export class Compodid extends React.Component{
    //first call is constructor
    constructor(){
        super();
        this.state={
            name:"himnshu"
        }
        console.warn("constor")
    }

   //  third call is componentDidMount 


    componentDidMount(){
        console.log("dididid")

    }

    //second call is render
    render(){
        console.log("rendd")


        return(
            
          <div>
            <hr/>
            <h1> {this.state.name}</h1>
            <button  onClick={()=>{this.setState({name:"ayush"})}}>update</button>
            heko
          </div>  
        )
    }
}